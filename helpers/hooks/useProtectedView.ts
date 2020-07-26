import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useCognitoUser from './useCognitoUser';

export default () => {
  const [user, loading] = useCognitoUser();
  const { push } = useRouter();
  console.log(user, loading);
  useEffect(() => {
    if (!user && !loading) {
      push('/login');
    }
  }, [user, loading]);
};
