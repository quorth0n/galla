import React from 'react';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import useCognitoUser from '../helpers/hooks/useCognitoUser';
import SignIn from '../components/SignIn';

const Login = () => {
  const router = useRouter();
  const user = useCognitoUser();
  if (user) router.back();

  return (
    <div className="mt-4">
      <Head title="Login" />
      <SignIn />
    </div>
  );
};

export default Login;
