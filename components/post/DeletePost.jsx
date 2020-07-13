import React from 'react';
import { Storage, API, graphqlOperation } from 'aws-amplify';

import {
  deleteTaggedPost,
  deleteCuratedPost,
  deletePost,
} from '../../src/graphql/mutations';

const DeletePost = ({ id, resolutions }) => {
  const delPost = async () => {
    if (confirm('Delete this post?')) {
      const fetchedPostRelations = await API.graphql({
        query: /* GraphQL */ `
          query GetPost($id: ID!) {
            getPost(id: $id) {
              tags {
                items {
                  id
                }
              }
              curations {
                items {
                  id
                }
              }
            }
          }
        `,
        variables: { id },
        authMode: 'API_KEY',
      });
      const {
        tags: { items: tagRelations },
        curations: { items: curationRelations },
      } = fetchedPostRelations.data.getPost;

      await Promise.all([
        ...resolutions.map(async (res) => {
          const key = res.url.substring(res.url.indexOf('.com/'));
          await Storage.remove(key);
        }),
        ...tagRelations.map(async ({ id: intId }) => {
          console.log(intId);
          await API.graphql(
            graphqlOperation(deleteTaggedPost, {
              input: { id: intId },
            })
          );
        }),
        ...curationRelations.map(async ({ id: intId }) => {
          console.log(intId);
          await API.graphql(
            graphqlOperation(deleteCuratedPost, {
              input: { id: intId },
            })
          );
        }),
      ]);
      await API.graphql(graphqlOperation(deletePost, { input: { id } }));
    }
  };

  return (
    <button className="hover:text-red-600" onClick={delPost}>
      <i className="fas fa-trash mr-1" /> Delete
    </button>
  );
};
export default DeletePost;
