import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import Head from '../components/Head';
import Dropdown from '../components/Dropdown';
import PostThumb from '../components/PostThumb';
import { searchPosts } from '../src/graphql/queries';

const Index = ({ initialPosts }) => {
  const [posts, setPosts] = React.useState(initialPosts);

  const postFilterChange = async (key) => {
    console.log(key);
    if (isNaN(key)) {
      switch (key) {
        case 'all': {
          const fetchPosts = await API.graphql({
            ...graphqlOperation(searchPosts, {
              sort: {
                field: 'totalScore',
                direction: 'desc',
              },
              limit: 30,
            }),
            authMode: 'API_KEY',
          });
          setPosts(fetchPosts.data.searchPosts.items);
          break;
        }
        case 'new': {
          const fetchPosts = await API.graphql({
            ...graphqlOperation(searchPosts, {
              sort: {
                field: 'createdAt',
              },
              limit: 30,
            }),
            authMode: 'API_KEY',
          });
          setPosts(fetchPosts.data.searchPosts.items);
          break;
        }
      }
    } else {
      const today = new Date();
      const start = new Date();
      start.setDate(today.getDate() - parseInt(key));
      const fetchPosts = await API.graphql({
        ...graphqlOperation(searchPosts, {
          filter: {
            createdAt: {
              range: [start.toISOString(), today.toISOString()],
            },
          },
          sort: {
            field: 'totalScore',
            direction: 'desc',
          },
          limit: key === '7' || key === '1' ? 8 : 30,
        }),
        authMode: 'API_KEY',
      });
      setPosts(fetchPosts.data.searchPosts.items);
    }
  };

  const pushCollection = (collection) => {
    console.log(collection);
  };

  return (
    <div className="p-4 px-8">
      <Head title="For artists, by artists" />
      <Dropdown
        options={[
          { value: 'Popular: 24 hr', key: '1' },
          { value: 'Popular: 1 week', key: '7' },
          { value: 'Popular: 1 month', key: '30' },
          { value: 'Popular: All Time', key: 'all' },
          { value: 'Newest', key: 'new' },
        ]}
        handleChange={postFilterChange}
      />
      <div className="mt-4 flex flex-wrap items-center justify-around leading-relaxed select-none">
        {posts.length === 0 ? (
          <h2 className="text-lg">No posts found for selected timeframe!</h2>
        ) : (
          posts.map((post) => (
            <div key={post.id} onClick={() => pushCollection(posts)}>
              <PostThumb post={post} />
            </div>
          ))
        )}
      </div>
      {posts.length > 0 && posts.length <= 8 && (
        <>
          <div className="pt-4 border-primary border-t">
            <h2 className="text-lg lg:text-left">
              Suggested category: <strong>Photography</strong>
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-around leading-relaxed select-none">
              {posts.slice(0, 3).map((post) => (
                <div key={post.id} onClick={() => pushCollection(posts)}>
                  <PostThumb post={post} />
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 border-primary border-t">
            <h2 className="text-lg lg:text-left">
              Suggested tag: <strong>#modernism</strong>
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-around leading-relaxed select-none">
              {posts.slice(0, 3).map((post) => (
                <div key={post.id} onClick={() => pushCollection(posts)}>
                  <PostThumb post={post} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const today = new Date();
  const start = new Date();
  start.setDate(today.getDate() - 7); // should change to - 1 as site activity grows
  const topPosts = await API.graphql({
    ...graphqlOperation(searchPosts, {
      filter: {
        createdAt: {
          range: [start.toISOString(), today.toISOString()],
        },
      },
      sort: {
        field: 'totalScore',
        direction: 'desc',
      },
      limit: 8,
    }),
    authMode: 'API_KEY',
  });
  console.log(topPosts);
  return {
    props: {
      initialPosts: topPosts.data.searchPosts.items,
    },
  };
};

export default Index;
