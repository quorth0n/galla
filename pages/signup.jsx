import React from 'react';
import { useRouter } from 'next/router';
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';

import Head from '../components/Head';
import useCognitoUser from '../helpers/hooks/useCognitoUser';

const Login = () => {
  const router = useRouter();
  const user = useCognitoUser();
  if (user) router.push('/');

  return (
    <>
      <Head title="Sign Up" />
      <AmplifyAuthenticator usernameAlias="username" initialAuthState="signup">
        <AmplifySignUp
          headerText="Start earning with Galla"
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
    </>
  );
};

export default Login;
