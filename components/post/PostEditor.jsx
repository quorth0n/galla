import React from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { nanoid } from 'nanoid';

import Head from '../Head';
import {
  createPost,
  createTaggedPost,
  updatePost,
} from '../../src/graphql/mutations';
import withAmplifyData from '../../helpers/hocs/withAmplifyData';
import useCognitoUser from '../../helpers/hooks/useCognitoUser';
import useWarnIfChanged from '../../helpers/hooks/useWarnIfChanged';
import updateIntermediaryTags from '../../helpers/functions/tags/updateIntermediaryTags';
import createNewTags from '../../helpers/functions/tags/createNewTags';

const PostEditor = ({ region, bucket, post }) => {
  const router = useRouter();
  const user = useCognitoUser();
  const { register, handleSubmit, errors, setError } = useForm();
  const [warn, setWarn] = React.useState(true);
  const [saving, setSaving] = React.useState(false);
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

  const onSubmit = (data) => {
    setWarn(false);
    setSaving(true);
    const upload = async (thumb, fullRes, postData) => {
      const id = post ? post.id : nanoid();

      const { title, description } = postData;
      const tags = Array.from(new Set(postData.tags.split(','))).map((tag) =>
        tag.trim()
      );

      let postInput = {
        id,
        title,
        description,
      };

      if (!post) {
        // upload thumbnail (public)
        const thumbUploadData = new FormData();
        thumbUploadData.append('thumb', thumb);
        thumbUploadData.append('id', id);
        const thumbKey = await fetch('/api/uploadThumb', {
          method: 'POST',
          body: thumbUploadData,
        }).then((res) => res.json());
        const thumbDim = await getDimensions(thumb);

        // upload 1080p (private to authenticated users)
        const ext = fullRes.name.split('.')[1];
        const { type: mimeType1080 } = fullRes;
        const key1080 = `${id}.full.${ext}`;
        await Storage.put(key1080, fullRes, { contentType: mimeType1080 });
        const img1080ForUpload = {
          bucket,
          key: key1080,
          region,
        };
        const fullResDim = await getDimensions(fullRes);

        // create resolutions arr
        const resolutions = [
          {
            resMode: `${getResMode(thumbDim[1])}p`,
            thumb: thumbKey.key,
          },
        ];
        if (getResMode(thumbDim[1]) !== getResMode(fullResDim[1])) {
          resolutions.unshift({
            resMode: `${getResMode(fullResDim[1])}p`,
            image: img1080ForUpload,
          });
        }

        // extend postInput with create-only data
        postInput = {
          thumb: thumbKey.key,
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
    };

    const { thumb, fullRes } = data;
    // size constraints
    if (thumb[0] && thumb[0].size > 250 * 1000) {
      setError('thumb', 'notMatch', 'Max size is 1 MB');
      return;
    }
    if (fullRes[0] && fullRes[0].size > 10 * 1000 * 1000) {
      setError('fullRes', 'notMatch', 'Max size is 10 MB');
      return;
    }
    // checks passed: upload
    try {
      if (!post && !thumb[0]) {
        // TODO: resize
        setError('thumb', 'notMatch', 'This field is required.');
        return;
      }
      upload(thumb[0], fullRes[0], data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="m-auto p-4 md:px-8 w-full lg:w-1/2">
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
          className={`px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-primary rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full ${
            errors.title && 'border-2 border-red-500 placeholder-red-500'
          }`}
          defaultValue={post ? post.title : ''}
        />
        <div
          className={`flex flex-col md:flex-row text-sm rounded bg-primary text-gray-700 p-3 ${
            post && 'hidden'
          }`}
        >
          <div>
            <label htmlFor="fullRes" className="text-base">
              Full Resolution: (required)
            </label>
            <input
              type="file"
              accept="image/png,image/webp,image/jpeg,image/gif"
              name="fullRes"
              ref={register({ required: !post })}
              className={`opacity-75 text-gray-500 min-w-0 w-full ${
                errors.fullRes && 'border-2 border-red-500 placeholder-red-500'
              }`}
            />
            <p className="text-red-500">
              {errors.fullRes && errors.fullRes.message}
            </p>
          </div>
          <div>
            <label htmlFor="thumb" className="text-base">
              Thumbnail:
            </label>
            <input
              type="file"
              accept="image/png,image/webp,image/jpeg,image/gif"
              name="thumb"
              ref={register()}
              className={`opacity-75 text-gray-500 min-w-0 w-full ${
                errors.thumb && 'border-2 border-red-500 placeholder-red-500'
              }`}
            />
            <p className="text-red-500">
              {errors.thumb && errors.thumb.message}
            </p>
          </div>
        </div>
        <textarea
          name="description"
          placeholder="Description"
          ref={register({ maxLength: 1300 })}
          maxLength={1300}
          className={`px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-primary rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full ${
            errors.description && 'border-2 border-red-500 placeholder-red-500'
          }`}
          defaultValue={post ? post.description : ''}
          rows={10}
        />
        <input
          type="text"
          placeholder="Tags (comma-separated)"
          name="tags"
          ref={register({ required: true, maxLength: 70 })}
          maxLength={70}
          className={`px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-primary rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full ${
            errors.tags && 'border-2 border-red-500 placeholder-red-500'
          }`}
          defaultValue={post.tags.items.map((tag) => tag.tagName).join(', ')}
        />
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
export default withAmplifyData(PostEditor);