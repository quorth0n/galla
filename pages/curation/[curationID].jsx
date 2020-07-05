import React from 'react';
import Error from 'next/error';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { API, graphqlOperation } from 'aws-amplify';
import { useForm } from 'react-hook-form';

import PostThumb from '../../components/PostThumb';
import Head from '../../components/Head';
import OwnerContext from '../../context/OwnerContext';
import Editable from '../../components/Editable';
import EditableTags from '../../components/EditableTags';
import { updateCuration } from '../../src/graphql/mutations';
import updateIntermediaryTags from '../../helpers/functions/tags/updateIntermediaryTags';
import TagsContext from '../../context/TagsContext';

const Curation = ({ curation }) => {
  const { register, handleSubmit, watch, errors, reset, formState } = useForm({
    mode: 'onBlur',
  });
  const router = useRouter();

  const tags =
    watch('tags', curation.tags) === curation.tags
      ? curation.tags
      : Array.from(new Set(watch('tags').split(',')))
          .map((tag) => tag.trim())
          .filter((tag) => !!tag);
  const tagString = watch(
    'tags',
    curation.tags.items.map((tag) => tag.tagName).join(', ')
  );

  const onSubmit = async (data) => {
    console.log(data);
    const dataForUpdate = ({ tags, ...rest }) => rest;
    await API.graphql(
      graphqlOperation(updateCuration, {
        input: {
          id: curation.id,
          ...dataForUpdate(data),
        },
      })
    );
    // if tags changed
    if (tags !== curation.tags) {
      await updateIntermediaryTags(
        'curation',
        curation.id,
        tags,
        curation.tags
      );
      router.reload(); // TODO: save in place by resetting to default values
    }
  };

  if (!curation) return <Error statusCode={404} />;
  return (
    <div className="m-auto flex flex-col justify-center text-left p-4 md:px-8">
      <Head title={curation.title} description={curation.description} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <OwnerContext.Provider value={curation.owner}>
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="text-2xl italic font-semibold">
                <Editable
                  text={watch('title', curation.title)}
                  error={errors.title}
                  type="input"
                >
                  <input
                    type="text"
                    name="title"
                    defaultValue={watch('title', curation.title)}
                    autoFocus={true}
                    ref={register({
                      maxLength: {
                        value: 50,
                        message: 'Cannot exceed 50 characters',
                      },
                    })}
                  />
                </Editable>
              </h1>
              <div>
                <span className="opacity-75">by </span>
                <Link href="/profile/[uid]" as={`/profile/${curation.owner}`}>
                  <a className="opacity-100">{curation.owner}</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row opacity-75">
              <div className="lg:mr-4 px-2 text-center">
                <span className="text-lg font-bold block uppercase tracking-wide text-primary">
                  {curation.posts.items.length}
                </span>
                <span className="text-sm text-primary opacity-75">Posts</span>
              </div>
              <div className="lg:mr-4 px-2 text-center">
                <span className="text-lg font-bold block uppercase tracking-wide text-primary">
                  0
                </span>
                <span className="text-sm text-primary opacity-75">
                  Followers
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4">
            <Editable
              text={watch('description', curation.description)}
              error={errors.description}
              type="textarea"
            >
              <textarea
                name="description"
                defaultValue={watch('description', curation.description)}
                autoFocus={true}
                ref={register({
                  maxLength: {
                    value: 2000,
                    message: 'Cannot exceed 2000 characters',
                  },
                })}
                rows={10}
                className="w-full"
              />
            </Editable>
          </p>
          <nav className="mt-4">
            <TagsContext.Provider value={{ tags, dirty: formState.dirty }}>
              <EditableTags error={errors.tags}>
                <input
                  type="text"
                  name="tags"
                  defaultValue={tagString}
                  autoFocus={true}
                  ref={register}
                />
              </EditableTags>
            </TagsContext.Provider>
          </nav>
          <div className="font-bold text-xl space-x-4 mt-4">
            {formState.dirty && (
              <>
                <button className="btn-primary" type="submit">
                  Save
                </button>
                <button className="btn-secondary" onClick={reset}>
                  Reset
                </button>
              </>
            )}
          </div>
          <div className="post-grid mt-6">
            {curation.posts.items.map(
              (curatedPost) =>
                curatedPost?.post && (
                  <div key={curatedPost.post.id}>
                    <PostThumb post={curatedPost.post} />
                  </div>
                )
            )}
          </div>
        </OwnerContext.Provider>
      </form>
    </div>
  );
};

export const getServerSideProps = async ({ query: { curationID }, res }) => {
  const fetchedCuration = await API.graphql({
    ...graphqlOperation(
      /* GraphQL */ `
        query GetCuration($id: ID!) {
          getCuration(id: $id) {
            id
            owner
            title
            description
            updatedAt
            posts {
              items {
                post {
                  id
                  title
                  description
                  thumb
                }
              }
              nextToken
            }
            tags {
              items {
                id
                tagName
              }
            }
          }
        }
      `,
      { id: curationID }
    ),
    authMode: 'API_KEY',
  });

  const curation = fetchedCuration.data.getCuration;
  if (!curation) {
    res.statusCode = 404;
  }
  return {
    props: {
      curation,
    },
  };
};

export default Curation;
