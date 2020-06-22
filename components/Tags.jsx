import React from 'react';
import { graphqlOperation, API } from 'aws-amplify';

import TagsContext from '../context/TagsContext';
import { viewTag } from '../src/graphql/mutations';

const Tags = () => {
  const { tags, dirty } = React.useContext(TagsContext);

  // map tag response to tag names array if needed
  const tagNames = tags.items ? tags.items.map((tag) => tag.tagName) : tags;

  React.useEffect(() => {
    // increment tag view count
    const viewTags = async () => {
      for (const name of tagNames) {
        await API.graphql({
          ...graphqlOperation(viewTag, { name }),
          authMode: 'API_KEY',
        });
      }
    };
    if (!dirty) viewTags();
  }, [tagNames, dirty]);

  return (
    <div className="space-x-1">
      <span>Tags: </span>
      {tagNames.length
        ? tagNames.map((tag) => (
            <a
              href="#"
              key={tag}
              className="text-xs inline-block py-1 px-2 uppercase rounded-full text-primary bg-accent uppercase font-semibold"
            >
              #{tag}
            </a>
          ))
        : '(none)'}
    </div>
  );
};

export default React.memo(Tags);
