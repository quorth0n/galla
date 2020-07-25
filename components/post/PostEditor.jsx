import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import { nanoid } from 'nanoid';

import Head from '../Head';
import { licenses } from '../../helpers/constants';
import useCognitoUser from '../../helpers/hooks/useCognitoUser';
import useWarnIfChanged from '../../helpers/hooks/useWarnIfChanged';
import updateIntermediaryTags from '../../helpers/functions/tags/updateIntermediaryTags';
import createNewTags from '../../helpers/functions/tags/createNewTags';
import publicUpload from '../../helpers/functions/storage/publicUpload';
import {
  createPost,
  createTaggedPost,
  updatePost,
} from '../../src/graphql/mutations';
import getUrlForPublicKey from '../../helpers/functions/storage/getUrlForPublicKey';

const PostEditor = ({ post }) => {
  console.log(post);
  const [warn, setWarn] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
  const [advanced, setAdvanced] = React.useState(false);

  const router = useRouter();
  const user = useCognitoUser();
  const { register, handleSubmit, errors } = useForm();
  useWarnIfChanged(warn);

  // gets approximate resolution from vertical pixels
  const getResMode = (height) =>
    [
      120,
      240,
      360,
      480,
      720,
      1080,
      1440,
      2160,
      2880,
      4320,
    ].reduce((prev, curr) => (curr <= height ? curr : prev));
  const getDimensions = async (file) =>
    new Promise((resolve, reject) => {
      const imgBlob = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        resolve([img.width, img.height]);
        URL.revokeObjectURL(img.src);
      };
      img.src = imgBlob;
    });

  const onSubmit = async (data) => {
    setWarn(false);
    setSaving(true);

    try {
      const id = post ? post.id : nanoid();

      const { title, description, license, forSale, price, quantity } = data;
      const fullRes = data.fullRes[0];
      const tags = Array.from(new Set(data.tags.split(','))).map((tag) =>
        tag.trim()
      );

      let postInput = {
        id,
        title,
        description,
        license,
        quantity: forSale ? quantity : -1,
        price,
      };

      if (!post) {
        // upload full res
        const fullResDim = await getDimensions(fullRes);
        const fullResMode = `${getResMode(fullResDim[1])}p`;
        const fullResUrl = await publicUpload(
          fullRes,
          `posts/${id}.${fullResMode}`,
          10 * 1000 * 1000
        );

        // create resolutions arr
        const resolutions = [
          {
            resMode: fullResMode,
            url: fullResUrl,
            thumb: false,
          },
        ];

        // thumb is handled by S3 trigger by default, grab reference here
        const ext = fullResUrl.substring(fullResUrl.lastIndexOf('.') + 1);
        let thumbUrl = getUrlForPublicKey(`thumbs/${id}.${ext}`);
        if (getResMode(fullResDim[1]) <= 360) {
          // use full res as thumbnail
          thumbUrl = await publicUpload(
            fullRes,
            `thumbs/${id}`,
            10 * 1000 * 1000
          );
        } else {
          // add thumb to resolutions
          resolutions.unshift({
            resMode: '360p',
            url: thumbUrl,
            thumb: true,
          });
        }

        // extend postInput with create-only data
        postInput = {
          thumb: thumbUrl,
          resolutions,
          userID: user.username,
          totalViews: 0,
          totalScore: 0,
          ...postInput,
        };
      }

      // create new tags and create/update post
      await Promise.all([
        API.graphql(
          graphqlOperation(post ? updatePost : createPost, {
            input: postInput,
          })
        ),
        createNewTags(tags),
      ]);

      if (post) {
        // only update added / removed TaggedPosts on update
        await updateIntermediaryTags('post', id, tags, post.tags);
      } else {
        // create all new TaggedPosts on create
        await Promise.all(
          tags.map(
            async (tag) =>
              await API.graphql(
                graphqlOperation(createTaggedPost, {
                  input: {
                    postID: id,
                    tagName: tag,
                  },
                })
              )
          )
        );
      }
      router.push(`/post/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="m-auto px-4 md:px-8 w-full lg:w-1/2 text-left">
      <style jsx>{`
        input:not(input[type='file']):not(input[type='checkbox']),
        textarea {
          @apply py-3 text-sm;
        }

        .saleOptions > label {
          display: block;
        }

        .forSale:checked ~ .saleOptions {
          display: block;
        }
      `}</style>
      <Head title={post ? `${post.title} - Edit` : 'New Post'} />
      <h1 className="text-3xl font-semibold mb-4">
        {post ? 'Edit post' : 'New post'}
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 justify-center align-middle"
      >
        <input
          type="text"
          placeholder="Title"
          name="title"
          maxLength={60}
          ref={register({ required: true, maxLength: 60 })}
          className={`${
            errors.title && 'border-2 border-red-500 placeholder-red-500'
          }`}
          defaultValue={post ? post.title : ''}
        />
        <div
          className={`flex flex-col md:flex-row text-sm rounded bg-primary text-gray-700 p-3 ${
            post && 'hidden'
          } ${
            errors.fullRes && 'border-2 border-red-500 placeholder-red-500'
          } `}
        >
          <label>
            <span className="mr-1 text-base">Image:</span>
            <input
              type="file"
              accept="image/png,image/webp,image/jpeg,image/gif"
              name="fullRes"
              ref={register({ required: !post })}
              className="opacity-75 text-gray-500 p-0 border-0"
            />
          </label>
          <p className="text-red-600">
            {errors.fullRes && errors.fullRes.message}
          </p>
        </div>
        <select
          name="license"
          ref={register}
          className="p-3 text-gray-700 bg-primary rounded shadow focus:shadow-outline w-full"
        >
          {Object.keys(licenses).map((license) => (
            <option value={license} key={license}>
              {licenses[license].name}
            </option>
          ))}
        </select>
        <textarea
          name="description"
          placeholder="Description"
          ref={register({ maxLength: 1300 })}
          maxLength={1300}
          className={`${
            errors.description && 'border-2 border-red-500 placeholder-red-500'
          }`}
          defaultValue={post ? post.description : ''}
          rows={10}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          name="tags"
          ref={register({ required: true })}
          className={`${
            errors.tags && 'border-2 border-red-500 placeholder-red-500'
          }`}
          defaultValue={
            post ? post.tags.items.map((tag) => tag.tagName).join(', ') : ''
          }
        />
        <button
          type="button"
          className="text-left"
          onClick={() => setAdvanced(!advanced)}
        >
          <i
            className={`text-lg mr-1 fas hover:text-red active:text-right focus:mt-3 ${
              advanced ? 'fa-caret-down' : 'fa-caret-right'
            }`}
          ></i>
          Advanced options
        </button>
        <div
          className={`advanced bg-primary text-gray-700 p-3 rounded shadow space-y-2 ${
            !advanced && 'hidden'
          }`}
        >
          <input
            type="checkbox"
            name="forSale"
            id="forSale"
            className="forSale mr-1"
            ref={register}
            defaultChecked={post?.quantity > -1}
          />
          <label htmlFor="forSale">This item is for sale</label>
          <div className="saleOptions hidden space-y-2 mt-2">
            <p className="opacity-75">
              Facilitation of sales is not currently provided by Galla. Please
              include an external link in your description to where your work
              can be purchased.
            </p>
            <label>
              <span className="mr-1">Price:</span>
              $
              <input
                type="number"
                step={0.01}
                name="price"
                ref={register}
                defaultValue={post?.price ?? 9.99}
                min={0.99}
                max={99999.99}
              />
            </label>
            <label>
              <span className="mr-1">Quantity:</span>
              <input
                type="number"
                name="quantity"
                ref={register}
                defaultValue={parseInt(post?.quantity) > -1 ? post.quantity : 1}
                min={0}
                max={99}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <button
            className="btn-secondary mr-2"
            type="button"
            onClick={() => {
              setWarn(false);
              router.back();
            }}
            disabled={saving}
          >
            Discard
          </button>
          <button type="submit" className="btn-primary" disabled={saving}>
            {saving ? 'Saving...' : post ? 'Save' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default React.memo(PostEditor);
