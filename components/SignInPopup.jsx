import React from 'react';
import SignIn from './SignIn';
import SignInOpenContext from '../context/SignInOpenContext';
import useCognitoUser from '../helpers/hooks/useCognitoUser';

const SignInPopup = () => {
  const { open, toggleOpen } = React.useContext(SignInOpenContext);
  const user = useCognitoUser();

  if (user || !open) {
    return null;
  }
  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-40">
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={toggleOpen}
      ></div>
      <div className="modal-content relative text-primary px-6 py-4 border-0 rounded-lg bg-secondary md:max-w-2xl shadow-lg z-50 overflow-y-auto">
        <span className="inline-block align-middle">
          <h2 className="capitalize mb-6 text-2xl font-bold">
            Join the Galla community
          </h2>
          <SignIn />
        </span>
        <button
          className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-3"
          onClick={toggleOpen}
        >
          <span>×</span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(SignInPopup);
