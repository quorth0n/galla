import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import { searchPosts } from '../src/graphql/queries';
import PostGrid from '../components/PostGrid';

const Posts = ({ initialPosts }) => <PostGrid initialPosts={initialPosts} />;

export const getServerSideProps = async () => {
  const fetchedPosts = await API.graphql({
    ...graphqlOperation(searchPosts, {
      filter: {
        title: {
          ne: 'Untitled curation',
        },
      },
      sort: {
        field: 'rank',
        direction: 'desc',
      },
      limit: 30,
    }),
    authMode: 'API_KEY',
  });
  return {
    props: {
      initialPosts: fetchedPosts.data.searchPosts.items,
    },
  };
};

export default Posts;
