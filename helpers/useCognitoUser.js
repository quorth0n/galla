import { useState, useEffect } from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';

import awsExports from '../src/aws-exports';

const useCognitoUser = () => {
  Amplify.configure(awsExports);

  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    setUser(await (await Auth.currentSession()).getIdToken().payload);
  };
  const onAuthChanged = ({ payload: { event } }) => {
    console.log('changed');
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
