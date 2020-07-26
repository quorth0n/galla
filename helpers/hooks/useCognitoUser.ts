import { useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

const useCognitoUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setUser(await Auth.currentAuthenticatedUser());
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  const onAuthChanged = ({ payload: { event } }) => {
    if (event === 'signIn') {
      fetchUser();
    }
    if (event === 'signOut') {
      setUser(null);
      setLoading(false);
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

  return [user, loading];
};

export default useCognitoUser;
