import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import useCognitoUser from '../helpers/useCognitoUser';
import { voteByPostByOwner } from '../src/graphql/queries';
import {
  upvotePost,
  downvotePost,
  createVote,
  updateVote,
  deleteVote,
} from '../src/graphql/mutations';

const Vote = ({ id, initialScore }) => {
  const [selectedVote, setSelectedVote] = React.useState({});
  const [score, setScore] = React.useState(initialScore);
  const user = useCognitoUser();

  React.useEffect(() => {
    // get vote status
    const fetchVote = async () => {
      console.log(user.username);
      console.log(
        graphqlOperation(voteByPostByOwner, {
          postID: id,
          owner: {
            eq: user.username,
          },
        })
      );
      const fetchedVote = await API.graphql(
        graphqlOperation(voteByPostByOwner, {
          postID: id,
          owner: {
            eq: user.username,
          },
        })
      );
      const existingVote = fetchedVote.data.voteByPostByOwner.items[0];
      if (existingVote) {
        setSelectedVote({ id: existingVote.id, upvote: existingVote.upvote });
      }
    };
    if (user) fetchVote();
  }, [id, user]);

  const vote = async (e) => {
    if (user) {
      const upvote = e.target.className.includes('up') ? 1 : 0;
      if ('upvote' in selectedVote) {
        // user changed their vote
        if (selectedVote.upvote === upvote) {
          // user did not also select a new vote
          await API.graphql(
            graphqlOperation(deleteVote, {
              input: {
                id: selectedVote.id,
              },
            })
          );
          // undo previous totalScore operation
          await API.graphql(
            graphqlOperation(selectedVote.upvote ? downvotePost : upvotePost, {
              id,
            })
          );
          setScore(score + (selectedVote.upvote ? -1 : 1));
          setSelectedVote({});
        } else {
          // user also selected a new vote
          await API.graphql(
            graphqlOperation(updateVote, {
              input: {
                id: selectedVote.id,
                upvote,
              },
            })
          );
          // perform totalScore operation twice, not working in same request...
          for (let i = 0; i < 2; i++) {
            await API.graphql(
              graphqlOperation(upvote ? upvotePost : downvotePost, { id })
            );
          }
          setScore(score + (upvote ? 2 : -2));
          setSelectedVote({ ...selectedVote, upvote });
        }
      } else {
        // user did not change their vote
        const fetchNewVote = await API.graphql(
          graphqlOperation(createVote, {
            input: {
              postID: id,
              owner: user.username,
              upvote,
            },
          })
        );
        const newVote = fetchNewVote.data.createVote;
        await API.graphql(
          graphqlOperation(upvote ? upvotePost : downvotePost, { id })
        );
        setScore(score + (upvote ? 1 : -1));
        setSelectedVote({ id: newVote.id, upvote });
      }
    } else {
      alert('not signed in!');
    }
  };
  return (
    <div className="text-center justify-center mr-4 md:mr-6">
      <a
        className={`fas fa-arrow-up text-xl block ${
          selectedVote.upvote === 1 && 'text-accent'
        }`}
        onClick={vote}
      />
      <strong
        className={`block cursor-default ${
          'upvote' in selectedVote && 'text-accent'
        }`}
      >
        {score}
      </strong>
      <a
        className={`fas fa-arrow-down text-xl block ${
          selectedVote.upvote === 0 && 'text-accent'
        }`}
        onClick={vote}
      />
    </div>
  );
};
export default Vote;
