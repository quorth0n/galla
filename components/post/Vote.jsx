import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import SignInOpenContext from '../../context/SignInOpenContext';
import useCognitoUser from '../../helpers/hooks/useCognitoUser';
import { voteByPostByOwner } from '../../src/graphql/queries';
import {
  votePost,
  createVote,
  updateVote,
  deleteVote,
} from '../../src/graphql/mutations';
import SignInPopup from '../SignInPopup';

const Vote = ({ id, initialScore }) => {
  const [selectedVote, setSelectedVote] = React.useState({});
  const [score, setScore] = React.useState(initialScore);
  const [showSignInPopup, setShowSignInPopup] = React.useState(false);
  const voteRef = React.useRef();
  const user = useCognitoUser();

  React.useEffect(() => {
    // get vote status
    const fetchVote = async () => {
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
            graphqlOperation(votePost, {
              id,
              vote: selectedVote.upvote ? -1 : 1,
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
          await API.graphql(
            graphqlOperation(votePost, {
              id,
              vote: upvote ? 2 : -2,
            })
          );
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
          graphqlOperation(votePost, {
            id,
            vote: upvote ? 1 : -1,
          })
        );
        setScore(score + (upvote ? 1 : -1));
        setSelectedVote({ id: newVote.id, upvote });
      }
    } else {
      setShowSignInPopup(true);
    }
  };

  const toggleOpen = () => setShowSignInPopup(!showSignInPopup);

  return (
    <div className="text-center justify-center mr-4 md:mr-6">
      <button
        className={`fas fa-arrow-up text-xl block ${
          selectedVote.upvote === 1 && 'text-accent'
        }`}
        onClick={vote}
      />
      <strong
        className={`block cursor-default ${
          'upvote' in selectedVote && 'text-accent'
        }`}
        ref={voteRef}
      >
        {score}
      </strong>
      <button
        className={`fas fa-arrow-down text-xl block ${
          selectedVote.upvote === 0 && 'text-accent'
        }`}
        onClick={vote}
      />
      <SignInOpenContext.Provider value={{ open: showSignInPopup, toggleOpen }}>
        <SignInPopup />
      </SignInOpenContext.Provider>
    </div>
  );
};
export default Vote;
