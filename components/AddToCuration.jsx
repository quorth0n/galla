import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { nanoid } from 'nanoid';

import useCognitoUser from '../helpers/hooks/useCognitoUser';
import usePopper from '../helpers/hooks/usePopper';
import {
  createCuration,
  createCuratedPost,
  deleteCuratedPost,
} from '../src/graphql/mutations';

const AddToCuration = ({ postID }) => {
  const [curations, setCurations] = React.useState([]);
  const [status, setStatus] = React.useState({
    icon: 'plus',
    text: 'Add to curation',
  });
  const btnRef = React.createRef();
  const popoverRef = React.createRef();
  const [popoverShow, openPopover, closePopover] = usePopper(
    btnRef,
    popoverRef
  );
  const user = useCognitoUser();

  React.useEffect(() => {
    const fetchCurations = async () => {
      const fetchedCurations = await API.graphql(
        graphqlOperation(
          /* GraphQL */ `
            query SearchCurations(
              $filter: SearchableCurationFilterInput
              $sort: SearchableCurationSortInput
              $limit: Int
              $nextToken: String
            ) {
              searchCurations(
                filter: $filter
                sort: $sort
                limit: $limit
                nextToken: $nextToken
              ) {
                items {
                  id
                  owner
                  title
                  description
                  updatedAt
                  posts {
                    items {
                      id
                      postID
                    }
                  }
                  createdAt
                }
                nextToken
              }
            }
          `,
          {
            filter: {
              owner: {
                eq: user.username,
              },
            },
          }
        )
      );
      setCurations(fetchedCurations.data.searchCurations.items);
    };
    if (user) fetchCurations();
  }, [user]);

  if (!user) return null;

  const handleCurationClick = async (id) => {
    const curation = curations.find((curation) => curation.id === id);
    const curatedPost = curation.posts.items.find(
      (post) => post.postID === postID
    );
    if (curatedPost) {
      setStatus({ icon: '', text: 'Removing...' });
      await API.graphql(
        graphqlOperation(deleteCuratedPost, {
          input: {
            id: curatedPost.id,
          },
        })
      );
      // update state to remove post
      const newCurations = Array.from(curations);
      newCurations[newCurations.indexOf(curation)].posts.items.pop(curatedPost);
      setCurations(newCurations);
    } else {
      setStatus({ icon: '', text: 'Adding...' });
      const addedCuratedPost = await API.graphql(
        graphqlOperation(createCuratedPost, {
          input: {
            curationID: id,
            postID,
          },
        })
      );
      const newCurations = Array.from(curations);
      newCurations[newCurations.indexOf(curation)].posts.items.push(
        addedCuratedPost.data.createCuratedPost
      );
      setCurations(newCurations);
    }
    setStatus({ icon: 'check', text: 'Done!' });
    setTimeout(() => {
      setStatus({ icon: 'plus', text: 'Add to curation' });
    }, 5000);
  };

  const newCuration = async () => {
    setStatus({ icon: '', text: 'Adding...' });
    const curation = await API.graphql(
      graphqlOperation(createCuration, {
        input: {
          id: nanoid(),
          title: 'Untitled curation',
          description: `A curation by ${user.username}`,
        },
      })
    );
    const addedCuratedPost = await API.graphql(
      graphqlOperation(createCuratedPost, {
        input: {
          curationID: curation.data.createCuration.id,
          postID,
        },
      })
    );
    const newCurations = Array.from(curations);
    newCurations.push(curation.data.createCuration);
    newCurations[newCurations.length - 1].posts.items.push(
      addedCuratedPost.data.createCuratedPost
    );
    setCurations(newCurations);
    setStatus({ icon: 'check', text: 'Done!' });
    setTimeout(() => {
      setStatus({ icon: 'plus', text: 'Add to curation' });
    }, 5000);
  };

  return (
    <div className="relative inline-flex align-middle">
      <button
        ref={btnRef}
        onClick={() => {
          popoverShow ? closePopover() : openPopover();
        }}
      >
        <i className={`fas fa-${status.icon} mr-1`} /> {status.text}
      </button>
      <div
        ref={popoverRef}
        className={
          (popoverShow ? 'block' : 'hidden') +
          ' bg-primary text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
        }
        style={{ minWidth: '5rem' }}
      >
        {curations.map((curation) => (
          <button
            key={curation.id}
            className={`text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-secondary ${
              curation.posts.items.some((post) => post.postID === postID) &&
              'font-semibold'
            }`}
            onClick={() => {
              closePopover();
              handleCurationClick(curation.id);
            }}
          >
            {curation.posts.items.some((post) => post.postID === postID) && (
              <i className="fas fa-check mr-2" />
            )}
            {curation.title}
          </button>
        ))}
        <button
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-secondary"
          onClick={() => {
            closePopover();
            newCuration();
          }}
        >
          + New
        </button>
      </div>
    </div>
  );
};

export default React.memo(AddToCuration);
