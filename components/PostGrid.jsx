import React from 'react';
import { useRouter } from 'next/router';
import { API, graphqlOperation } from 'aws-amplify';

import Head from '../components/Head';
import Dropdown from '../components/Dropdown';
import PostThumb from '../components/PostThumb';
import FilterTabs from '../components/index/FilterTabs';
import { searchPosts } from '../src/graphql/queries';

const PostGrid = ({ initialPosts }) => {
  const [posts, setPosts] = React.useState(initialPosts);
  const { pathname } = useRouter();
  const market = pathname.includes('market');

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
              ...(market && {
                filter: {
                  quantity: {
                    gt: 0,
                  },
                },
              }),
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
              ...(market && {
                filter: {
                  quantity: {
                    gt: 0,
                  },
                },
              }),
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
              ...(market && {
                filter: {
                  quantity: {
                    gt: 0,
                  },
                },
              }),
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
            ...(market && {
              quantity: {
                gt: 0,
              },
            }),
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
    <div className="px-8">
      <Head />
      <div className="flex flex-col lg:flex-row justify-between">
        <FilterTabs />
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
      </div>
      <div className="my-6 post-grid">
        {posts.length === 0 ? (
          <h2 className="text-lg text-left opacity-75">No posts found!</h2>
        ) : (
          posts.map((post) => <PostThumb post={post} key={post} />)
        )}
      </div>
    </div>
  );
};
export default PostGrid;
