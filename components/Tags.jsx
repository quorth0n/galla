import React from 'react';
import { viewTag } from '../src/graphql/mutations';
import { graphqlOperation, API } from 'aws-amplify';

const Tags = ({ tags }) => {
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
    viewTags();
  }, [tagNames]);

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

export default Tags;
