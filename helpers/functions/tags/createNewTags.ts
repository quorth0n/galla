import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';

import { getTag } from '../../../src/graphql/queries';
import { createTag } from '../../../src/graphql/mutations';
import { GetTagQuery } from '../../../src/API';

export default async (tags: string[]) => {
  const newTags = await tags.reduce(async (accumP, tag) => {
    const accumulator = await accumP;
    const tagResponse = (await API.graphql(
      graphqlOperation(getTag, { name: tag })
    )) as GraphQLResult<GetTagQuery>;
    if (!tagResponse.data.getTag) {
      accumulator.push(tag);
    }
    return accumulator;
  }, Promise.resolve([]));
  debugger;

  const tagsPromise = newTags.map(
    async (tag) =>
      await API.graphql(
        graphqlOperation(createTag, {
          input: {
            name: tag,
            totalViews: 0,
            yearlyViews: 0,
            monthlyViews: 0,
            weeklyViews: 0,
            dailyViews: 0,
          },
        })
      )
  );
  await Promise.all(tagsPromise);
};
