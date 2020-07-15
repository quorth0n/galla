import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import Head from '../components/Head';
import Dropdown from '../components/Dropdown';
import PostThumb from '../components/PostThumb';
import { searchPosts } from '../src/graphql/queries';

const Index = ({ initialPosts }) => {
  const [posts, setPosts] = React.useState(initialPosts);

  const postFilterChange = async (key) => {
    if (isNaN(key)) {
      // for non date range filters
      switch (key) {
        case 'hot': {
          const fetchPosts = await API.graphql({
            ...graphqlOperation(searchPosts, {
              sort: {
                field: 'rank',
                direction: 'desc',
              },
              limit: 30,
            }),
            authMode: 'API_KEY',
          });
          setPosts(fetchPosts.data.searchPosts.items);
          break;
        }
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
      // for date range filters
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

  return (
    <div className="p-4 px-8">
      <Head />
      <Dropdown
        options={[
          { value: 'Trending', key: 'hot' },
          { value: 'Top: past day', key: '1' },
          { value: 'Top: past week', key: '7' },
          { value: 'Top: past month', key: '30' },
          { value: 'Top: all time', key: 'all' },
          { value: 'Newest', key: 'new' },
        ]}
        handleChange={postFilterChange}
      />
      <div className="my-6 post-grid">
        {posts.length === 0 ? (
          <h2 className="text-lg w-full h-full">
            No posts found for selected timeframe!
          </h2>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <PostThumb post={post} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const today = new Date();
  const start = new Date();
  start.setDate(today.getDate() - 7); // should change to - 1 as site activity grows
  const topPosts = await API.graphql({
    ...graphqlOperation(searchPosts, {
      sort: {
        field: 'rank',
        direction: 'desc',
      },
      limit: 8,
    }),
    authMode: 'API_KEY',
  });
  return {
    props: {
      initialPosts: topPosts.data.searchPosts.items,
    },
  };
};

export default Index;
