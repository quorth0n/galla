import React from 'react';
import Error from 'next/error';
import { API, graphqlOperation } from 'aws-amplify';

import { getUser, searchPosts } from '../../src/graphql/queries';
import PostThumb from '../../components/PostThumb';
import EditableItem from '../../components/profile/EditableItem';
import UploadIcon from '../../components/profile/UploadIcon';
import EditingContext from '../../context/profile/EditingContext';
import useCognitoUser from '../../helpers/useCognitoUser';

const Profile = ({ user }) => {
  const [posts, setPosts] = React.useState([{}]);
  const [postCount, setPostCount] = React.useState(0);
  const [editing, setEditing] = React.useState(false);
  const currentUser = useCognitoUser();

  React.useEffect(() => {
    if (user) {
      const fetchPosts = async () => {
        const fetchPosts = await API.graphql(
          graphqlOperation(searchPosts, {
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
          })
        );
        setPostCount(fetchPosts.data.searchPosts.total);
        setPosts(fetchPosts.data.searchPosts.items);
      };
      fetchPosts();
    }
  }, [user]);

  if (!user) return <Error statusCode={404} />;

  const canEdit = currentUser && currentUser.username === user.username;
  return (
    <EditingContext.Provider value={editing}>
      <main className="profile-page">
        <section className="relative block" style={{ height: '500px' }}>
          <UploadIcon name="bg" style={{ zIndex: 40, right: '1rem' }} />
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('/thumbs/${posts[0].thumb}')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute left-0 opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: '70px', transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-secondary-soft fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-secondary-soft">
          <div className="container mx-auto px-4">
            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64 border-solid border border-primary bg-secondary shadow-2xl"
              style={{
                backgroundClip: 'padding-box',
              }}
            >
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="ehopper"
                      src="https://uploads5.wikiart.org/images/edward-hopper.jpg!Portrait.jpg"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20"
                      style={{ maxWidth: '150px' }}
                    />
                    <UploadIcon
                      name="avatar"
                      style={{
                        top: '-4rem',
                        right: '-3.75rem',
                      }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 lg:mt-0">
                    {!canEdit && (
                      <button className="btn-primary" type="button">
                        Follow
                      </button>
                    )}
                    {canEdit && (
                      <button
                        className={editing ? 'btn-secondary' : 'btn-primary'}
                        type="button"
                        onClick={() => setEditing(!editing)}
                      >
                        {editing ? 'Discard' : 'Edit'}
                      </button>
                    )}
                    {editing && (
                      <button
                        className="btn-primary"
                        type="button"
                        onClick={() => setEditing(!editing)}
                      >
                        Save
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
                  <div className="flex py-4 lg:pt-4 pt-8">
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
                  </div>
                </div>
              </div>
              <div className="text-center pt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-primary mb-2">
                  {user.username}
                </h3>
                <EditableItem
                  name="realName"
                  value={user.realName}
                  placeholder="Real name"
                  icon="fa-user"
                />
                <EditableItem
                  name="location"
                  value={user.location}
                  placeholder="Location"
                  icon="fa-map-marker-alt"
                />
                <EditableItem
                  name="website"
                  value={user.website}
                  placeholder="Website"
                  icon="fa-link"
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
              <EditableItem
                name="description"
                value={user.description}
                placeholder="Description"
                textarea={true}
              />
              <div
                id="posts"
                className="py-10 border-t border-primary text-center bg-secondary-soft"
              >
                <h4 className="text-2xl font-semibold leading-normal mb-8 text-primary">
                  Top Posts
                </h4>
                <div className="inline-flex flex-row w-full pb-4 px-4 lg:px-8 items-center overflow-x-auto">
                  {posts.map((post) => (
                    <PostThumb key={post.id} post={post} />
                  ))}
                </div>
              </div>
              <div className="text-center bg-secondary-soft pb-10">
                <a href="#posts" className="font-semibold text-accent">
                  View all
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
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
