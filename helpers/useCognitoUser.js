import { useState, useEffect } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';

import awsExports from '../src/aws-exports';

const useCognitoUser = () => {
  Amplify.configure(awsExports);

  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    setUser(await Auth.currentAuthenticatedUser());
  };
  const onAuthChanged = ({ payload: { event } }) => {
    if (event === 'signIn') {
      fetchUser();
    }
    if (event === 'signOut') {
      setUser(null);
    }
  };
  useEffect(() => {
    Hub.listen('auth', onAuthChanged);

    return () => {
      // unsubscribe
      Hub.remove('auth', onAuthChanged);
    };
  });

  return user;
};

export default useCognitoUser;
