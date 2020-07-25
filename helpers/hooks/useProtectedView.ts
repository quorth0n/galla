import { useEffect } from 'react';
import { useRouter } from 'next/router';

import useCognitoUser from './useCognitoUser';

export default () => {
  const user = useCognitoUser();
  const { push } = useRouter();
  useEffect(() => {
    if (!user) {
      push('/login');
    }
  }, []);
};
