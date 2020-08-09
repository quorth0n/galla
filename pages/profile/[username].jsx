import React from 'react';
import Error from 'next/error';
import { useRouter } from 'next/router';
import { useForm, FormContext } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { API, graphqlOperation } from 'aws-amplify';

import PostThumb from '../../components/PostThumb';
import Avatar from '../../components/profile/Avatar';
import Cover from '../../components/profile/Cover';
import EditableProfileItem from '../../components/profile/EditableProfileItem';
import EditingContext from '../../context/profile/EditingContext';
import useCognitoUser from '../../helpers/hooks/useCognitoUser';
import publicUpload from '../../helpers/functions/storage/publicUpload';
import { getUser, searchPosts } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';
import CurationThumb from '../../components/CurationThumb';

const Profile = ({ user }) => {
  const [posts, setPosts] = React.useState([{}]);
  const [postCount, setPostCount] = React.useState(0);
  const [curations, setCurations] = React.useState([]);
  const [curationCount, setCurationCount] = React.useState(0);

  const [editing, setEditing] = React.useState(false);
  const [saving, setSaving] = React.useState(false);

  const router = useRouter();
  const methods = useForm();
  const { register, handleSubmit, errors, setError } = methods;
  const { addToast } = useToasts();
  const [currentUser] = useCognitoUser();

  const onProfileSubmit = async (data) => {
    setSaving(true);
    const { avatar, bg, ...uploadedData } = data;
    try {
      uploadedData.avatar = await publicUpload(
        avatar[0],
        `avatars/${user.username}`
      );
      uploadedData.bg = await publicUpload(
        bg[0],
        `bg/${user.username}`,
        10 * 1000 * 1000
      );
      const input = Object.keys(uploadedData).reduce((accum, key) => {
        if (uploadedData[key]) {
          accum[key] = uploadedData[key];
        }
        return accum;
      }, {});
      input.username = user.username;
      await API.graphql(
        graphqlOperation(updateUser, {
          input,
        })
      );
      router.reload();
    } catch (err) {
      setError('misc', 'notMatch', err.message);
    }
  };

  // CSR posts and curations
  React.useEffect(() => {
    const fetchCurations = async () => {
      const fetchedCurations = await API.graphql({
        ...graphqlOperation(
          /* GraphQL */ `
            query SearchCurations(
              $filter: SearchableCurationFilterInput
              $sort: SearchableCurationSortInput
              $limit: Int
              $postLimit: Int
              $nextToken: String
            ) {
              searchCurations(
                filter: $filter
                sort: $sort
                nextToken: $nextToken
                limit: $limit
              ) {
                items {
                  id
                  title
                  description
                  posts(limit: $postLimit) {
                    items {
                      post {
                        thumb
                      }
                    }
                  }
                  createdAt
                }
                nextToken
                total
              }
            }
          `,
          {
            filter: {
              owner: {
                eq: user.username,
              },
            },
            limit: 4,
            postLimit: 4,
          }
        ),
        authMode: 'API_KEY',
      });
      setCurationCount(fetchedCurations.data.searchCurations.total ?? 0);
      setCurations(fetchedCurations.data.searchCurations.items);
    };
    const fetchPosts = async () => {
      const fetchPosts = await API.graphql({
        ...graphqlOperation(searchPosts, {
          filter: {
            userID: {
              eq: user.username,
            },
          },
          /* sort: {
              field: 'createdAt',
              direction: 'desc',
            }, */
          limit: 5,
        }),
        authMode: 'API_KEY',
      });
      setPostCount(fetchPosts.data.searchPosts.total ?? 0);
      setPosts(fetchPosts.data.searchPosts.items);
    };
    if (user) {
      fetchPosts();
      fetchCurations();
    }
  }, [user]);
  // display errors on submit
  React.useEffect(() => {
    Object.values(errors).map((error) =>
      addToast(error.message, { appearance: 'error' })
    );
  }, [errors, addToast]);

  if (!user) return <Error statusCode={404} />;

  const canEdit = currentUser && currentUser.username === user.username;
  return (
    <EditingContext.Provider value={editing}>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onProfileSubmit)}>
          <Cover defaultCover={user.bg} />
          <section className="relative pt-16">
            <div className="container mx-auto px-4">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg -mt-64 border-solid border border-primary bg-secondary shadow-2xl"
                style={{
                  backgroundClip: 'padding-box',
                }}
              >
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <Avatar user={user} />
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div
                      className={`pt-6 px-3 ${user.avatar && 'mt-20'} lg:mt-0`}
                    >
                      {canEdit ? (
                        <button
                          className={editing ? 'btn-secondary' : 'btn-primary'}
                          type="button"
                          onClick={() => setEditing(!editing)}
                          disabled={saving}
                        >
                          {editing ? 'Discard' : 'Edit'}
                        </button>
                      ) : (
                        <button
                          className="btn-primary"
                          type="button"
                          disabled={true}
                          title="Coming soon!"
                        >
                          Follow
                        </button>
                      )}
                      {editing && (
                        <button
                          className="btn-primary"
                          type="submit"
                          disabled={saving}
                        >
                          {saving ? 'Saving...' : 'Save'}
                        </button>
                      )}
                      <style jsx>
                        {`
                          button + button {
                            margin-left: 0.5rem;
                          }
                        `}
                      </style>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex py-4 justify-center lg:justify-start">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                          {user.monthlyViews}
                        </span>
                        <span className="text-sm text-primary-500 opacity-75">
                          Views/mo
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                          {postCount}
                        </span>
                        <span className="text-sm text-primary opacity-75">
                          Posts
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-primary">
                          {curationCount}
                        </span>
                        <span className="text-sm text-primary opacity-75">
                          Curations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-semibold leading-normal text-primary mb-2">
                    {user.username}
                  </h3>
                  <EditableProfileItem
                    name="realName"
                    value={user.realName}
                    placeholder="Real name"
                    icon="fa-user"
                    ref={register}
                  />
                  <EditableProfileItem
                    name="location"
                    value={user.location}
                    placeholder="Location"
                    icon="fa-map-marker-alt"
                    ref={register}
                  />
                  <EditableProfileItem
                    name="website"
                    value={user.website}
                    placeholder="Website"
                    icon="fa-link"
                    ref={register}
                  />
                  <style jsx>
                    {`
                      div {
                        @apply text-sm leading-normal mt-0 mb-2 text-primary font-bold uppercase;
                      }
                      i {
                        @apply mr-2 text-lg text-primary;
                      }
                    `}
                  </style>
                </div>
                <EditableProfileItem
                  name="description"
                  value={user.description}
                  placeholder="Description"
                  textarea={true}
                  ref={register}
                />
                <div
                  id="posts"
                  className="py-10 border-t border-primary text-center bg-secondary-soft"
                >
                  <h4 className="text-2xl font-semibold leading-normal mb-6 text-primary">
                    Posts
                  </h4>
                  <div
                    className={`px-4 lg:px-8 ${
                      posts.length && 'post-grid user-grid'
                    }`}
                  >
                    {posts.length ? (
                      posts.map((post) => <PostThumb key={post} post={post} />)
                    ) : (
                      <h2 className="text-lg w-full h-full opacity-75">
                        No posts yet!
                      </h2>
                    )}
                  </div>
                  <button
                    type="button"
                    className="inline font-semibold text-accent mt-3"
                    onClick={(e) => e.target.classList.add('hidden')}
                  >
                    View all
                  </button>
                </div>
                <div
                  id="curations"
                  className="py-10 border-t border-primary text-center bg-secondary-soft"
                >
                  <h4 className="text-2xl font-semibold leading-normal mb-6 text-primary">
                    Curations
                  </h4>
                  <div
                    className={`px-4 lg:px-8 ${
                      curations.length && 'post-grid grid-even'
                    }`}
                  >
                    {curations.length ? (
                      curations.map((curation) => (
                        <CurationThumb key={curation.id} curation={curation} />
                      ))
                    ) : (
                      <h2 className="text-lg w-full h-full opacity-75">
                        No curations yet!
                      </h2>
                    )}
                  </div>
                  <div className="text-center bg-secondary-soft items-center">
                    <button
                      type="button"
                      className="font-semibold text-accent mt-3"
                      onClick={(e) => e.target.classList.add('hidden')}
                    >
                      View all
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </FormContext>
    </EditingContext.Provider>
  );
};

export const getServerSideProps = async ({ query: { username }, res }) => {
  const fetchPost = await API.graphql({
    ...graphqlOperation(getUser, {
      username,
    }),
    authMode: 'API_KEY',
  });
  const user = fetchPost.data.getUser;
  if (!user) {
    res.statusCode = 404;
  }
  return {
    props: {
      user,
    },
  };
};

export default Profile;
