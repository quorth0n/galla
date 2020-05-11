import React from 'react';
import { useForm } from 'react-hook-form';
import { Storage, API, graphqlOperation } from 'aws-amplify';
import { nanoid } from 'nanoid';

import { createPost } from '../../src/graphql/mutations';

import withAmplify from '../../helpers/withAmplify';

const NewPost = ({ region, bucket }) => {
  const { register, handleSubmit, errors, setError } = useForm();
  const onSubmit = (data) => {
    const publicUpload = async (file, postData) => {
      const extension = file.name.split('.')[1];
      const { type: contentType } = file;
      const id = nanoid();
      const key = `${id}.${extension}`;
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/thumbs/${key}`;

      await Storage.put(`thumbs/${key}`, file, {
        contentType,
      });
      // TODO: private high res upload

      const { title, description } = postData;
      const tags = postData.tags.split(',').map((tag) => tag.trim());
      await API.graphql(
        graphqlOperation(createPost, {
          input: {
            id,
            title,
            description,
            tags,
            createdAt: new Date().toISOString(),
            img360: url,
          },
        })
      );
    };

    const { img360, img720, img1080 } = data;

    // size constraints
    if (img360[0] && img360[0].size > 250 * 1000) {
      setError('img360', 'notMatch', 'Max size is 250 KB');
    } else if (img720[0] && img720[0].size > 1 * 1000 * 1000) {
      setError('img720', 'notMatch', 'Max size is 1 MB');
    } else if (img1080[0] && img1080[0].size > 2 * 1000 * 1000) {
      setError('img1080', 'notMatch', 'Max size is 2 MB');
    } else {
      try {
        //publicUpload(img360[0], data);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="m-auto p-4 md:px-8 w-full lg:w-1/2">
      <form
        action="/api/newPost"
        method="post"
        encType="multipart/form-data"
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
        />
        <div className="flex flex-col md:flex-row text-sm rounded bg-primary text-gray-700 p-3">
          <div>
            <label htmlFor="img1080" className="text-base">
              1080p: (required)
            </label>
            <input
              type="file"
              accept="image/png,image/apng,image/webp,image/jpeg,image/bmp"
              name="img1080"
              ref={register({ required: true })}
              className={`opacity-75 text-gray-500 min-w-0 w-full ${
                errors.img1080 && 'border-2 border-red-500 placeholder-red-500'
              }`}
            />
            <p className="text-red-500">
              {errors.img1080 && errors.img1080.message}
            </p>
          </div>
          <div>
            <label htmlFor="img720" className="text-base">
              720p:
            </label>
            <input
              type="file"
              accept="image/png,image/apng,image/webp,image/jpeg,image/bmp"
              name="img720"
              ref={register()}
              className={`opacity-75 text-gray-500 min-w-0 w-full ${
                errors.img720 && 'border-2 border-red-500 placeholder-red-500'
              }`}
            />
            <p className="text-red-500">
              {errors.img720 && errors.img720.message}
            </p>
          </div>
          <div>
            <label htmlFor="img1080" className="text-base">
              360p:
            </label>
            <input
              type="file"
              accept="image/png,image/apng,image/webp,image/jpeg,image/bmp"
              name="img360"
              ref={register()}
              className={`opacity-75 text-gray-500 min-w-0 w-full ${
                errors.img360 && 'border-2 border-red-500 placeholder-red-500'
              }`}
            />
            <p className="text-red-500">
              {errors.img360 && errors.img360.message}
            </p>
          </div>
        </div>
        <textarea
          name="description"
          placeholder="Description"
          ref={register({ required: true, maxLength: 1300 })}
          maxLength={1300}
          className={`px-3 py-3 placeholder-gray-500 text-gray-700 relative bg-primary rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full ${
            errors.description && 'border-2 border-red-500 placeholder-red-500'
          }`}
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
        />

        <button
          type="submit"
          className="bg-accent uppercase text-white font-bold hover:shadow-lg shadow text-xs px-4 py-2 rounded outline-none focus:outline-none mb-1 w-32"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default withAmplify(NewPost);
