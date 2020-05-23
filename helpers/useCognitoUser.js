import { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

const useCognitoUser = () => {
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

  // listen to auth updates
  useEffect(() => {
    Hub.listen('auth', onAuthChanged);

    return () => {
      // unsubscribe
      Hub.remove('auth', onAuthChanged);
    };
  });

  // fetch user on component mount
  useEffect(() => {
    fetchUser();
  }, []);

  return user;
};

export default useCognitoUser;
