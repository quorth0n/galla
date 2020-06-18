import React from 'react';
import Error from 'next/error';
import Link from 'next/link';
import { API, graphqlOperation } from 'aws-amplify';

import PostThumb from '../../components/PostThumb';
import Head from '../../components/Head';

const Curation = ({ curation }) => {
  console.log(curation);
  if (!curation) return <Error statusCode={404} />;
  return (
    <div className="m-auto inline-flex flex-col justify-center text-left p-4 md:px-8">
      <Head title={curation.title} description={curation.description} />
      <div className="flex flex-row">
        <h1 className="text-2xl italic font-semibold">{curation.title}</h1>
      </div>
      <div>
        <span className="opacity-75">by </span>
        <Link href="/profile/[uid]" as={`/profile/${curation.owner}`}>
          <a className="opacity-100">{curation.owner}</a>
        </Link>
      </div>
      <div className="post-grid">
        {curation.posts.items.map((curatedPost) => (
          <div key={curatedPost.post.id}>
            <PostThumb post={curatedPost.post} />
          </div>
        ))}
      </div>
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
          }
        }
      `,
      { id: curationID }
    ),
    authMode: 'API_KEY',
  });
  const curation = fetchedCuration.data.getCuration;
  console.log(curation);
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
