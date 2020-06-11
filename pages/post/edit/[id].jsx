import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import PostEditor from '../../../components/PostEditor';

const EditPost = ({ post }) => <PostEditor post={post} />;

export const getServerSideProps = async ({ query: { id }, res }) => {
  const fetchPost = await API.graphql({
    ...graphqlOperation(
      /* GraphQL */ `
        query GetPost($id: ID!) {
          getPost(id: $id) {
            id
            title
            description
            createdAt
            userID
            thumb
            resolutions {
              resMode
              image {
                bucket
                region
                key
              }
              thumb
            }
            totalScore
            updatedAt
            monthlyViews
            totalViews
            tags {
              items {
                id
                tagName
              }
            }
          }
        }
      `,
      {
        id,
      }
    ),
    authMode: 'API_KEY',
  });
  const post = fetchPost.data.getPost;
  if (!post) {
    res.statusCode = 404;
  }
  return {
    props: {
      post,
    },
  };
};

export default EditPost;
