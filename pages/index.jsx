import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import Head from '../components/Head';
import Dropdown from '../components/Dropdown';
import PostThumb from '../components/PostThumb';
import { searchPosts } from '../src/graphql/queries';

const Index = ({ posts }) => {
  const pushCollection = (collection) => {
    console.log(collection);
  };

  return (
    <div className="p-4 px-8">
      <Head title="For artists, by artists" />
      <Dropdown
        options={[
          'Popular: 24 hr',
          'Popular: 1 week',
          'Popular: 1 month',
          'Popular: All Time',
          'Newest',
        ].map((option) => ({
          key: option.toLowerCase(),
          value: option,
        }))}
        handleChange={(change) => console.log(change)}
      />
      <div className="mt-4 flex flex-wrap items-center justify-around leading-relaxed select-none">
        {posts.map((post) => (
          <div key={post.id} onClick={() => pushCollection(posts)}>
            <PostThumb post={post} />
          </div>
        ))}
      </div>
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
    </div>
  );
};

export const getServerSideProps = async () => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 7);
  const topPosts = await API.graphql({
    ...graphqlOperation(searchPosts, {
      filter: {
        or: [
          {
            createdAt: {
              gte: yesterday.toISOString(),
            },
          },
          {
            createdAt: {
              lte: today.toISOString(),
            },
          },
        ],
      },
      sort: {
        field: 'totalScore',
        direction: 'desc',
      },
      limit: 10,
    }),
    authMode: 'API_KEY',
  });
  return {
    props: {
      posts: topPosts.data.searchPosts.items,
    },
  };
};

export default Index;
