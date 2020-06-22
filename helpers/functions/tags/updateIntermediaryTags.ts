import { API, graphqlOperation } from 'aws-amplify';

import createNewTags from './createNewTags';
import {
  createTaggedPost,
  createTaggedCuration,
  deleteTaggedPost,
  deleteTaggedCuration,
} from '../../../src/graphql/mutations';

type TagResponse = {
  id: string;
  tagName: string;
};

export default async (
  model: 'post' | 'curation',
  id: string,
  newTagNames: string[],
  originalTagsResponse: { items: TagResponse[] }
) => {
  const oldTagNames = originalTagsResponse.items.map((tag) => tag.tagName);

  const addedTagNames = newTagNames.filter((tag) => !oldTagNames.includes(tag));
  const removedTags = oldTagNames.filter((tag) => !newTagNames.includes(tag));

  // create new tag models
  await createNewTags(addedTagNames);

  if (addedTagNames.length || removedTags.length) {
    const removedIntermediaryTagIds = removedTags.map(
      (tag) =>
        originalTagsResponse.items.find((item) => item.tagName === tag).id
    );

    switch (model) {
      case 'post':
        await Promise.all([
          ...addedTagNames.map(
            async (tagName) =>
              await API.graphql(
                graphqlOperation(createTaggedPost, {
                  input: {
                    postID: id,
                    tagName,
                  },
                })
              )
          ),
          ...removedIntermediaryTagIds.map(
            async (intermediaryTagId) =>
              await API.graphql(
                graphqlOperation(deleteTaggedPost, {
                  input: { id: intermediaryTagId },
                })
              )
          ),
        ]);
        break;

      case 'curation':
        await Promise.all([
          ...addedTagNames.map(
            async (tag) =>
              await API.graphql(
                graphqlOperation(createTaggedCuration, {
                  input: {
                    curationID: id,
                    tagName: tag,
                  },
                })
              )
          ),
          ...removedIntermediaryTagIds.map(
            async (intermediaryTagId) =>
              await API.graphql(
                graphqlOperation(deleteTaggedCuration, {
                  input: { id: intermediaryTagId },
                })
              )
          ),
        ]);
        break;
    }
  }
};
