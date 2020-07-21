import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import Head from '../components/Head';
import Dropdown from '../components/Dropdown';
import FilterTabs from '../components/index/FilterTabs';
import CurationThumb from '../components/CurationThumb';

const Curations = ({ initialCurations }) => {
  const curations = initialCurations; // Todo: useState and add more filter options

  return (
    <div className="p-4 px-8">
      <Head />
      <div className="flex flex-col lg:flex-row justify-between">
        <FilterTabs />
        <Dropdown options={[{ value: 'Last updated', key: 'new' }]} />
      </div>
      <div
        className="my-6 post-grid grid-even"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
      >
        {curations.length === 0 ? (
          <h2 className="text-lg w-full h-full opacity-75">
            No curations found!
          </h2>
        ) : (
          curations.map((curation) => (
            <CurationThumb curation={curation} key={curation} />
          ))
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
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
            limit: $limit
            sort: $sort
            nextToken: $nextToken
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
          }
        }
      `,
      {
        sort: {
          field: 'updatedAt',
          direction: 'desc',
        },
        postLimit: 4,
      }
    ),
    authMode: 'API_KEY',
  });
  return {
    props: {
      initialCurations: fetchedCurations.data.searchCurations.items,
    },
  };
};

export default Curations;
