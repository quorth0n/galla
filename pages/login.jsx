import React from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import useCognitoUser from '../helpers/useCognitoUser';

const Login = () => {
  const router = useRouter();
  const user = useCognitoUser();
  if (user) router.push('/');

  return (
    <div className="mt-4">
      <Head title="Login" />
      <AmplifyAuthenticator usernameAlias="username">
        <AmplifySignIn slot="sign-in" />
        <AmplifySignUp
          formFields={[
            {
              type: 'username',
              required: true,
            },
            {
              type: 'email',
              required: true,
            },
            {
              type: 'password',
              required: true,
            },
          ]}
          slot="sign-up"
        />
      </AmplifyAuthenticator>
    </div>
  );
};

export default Login;
