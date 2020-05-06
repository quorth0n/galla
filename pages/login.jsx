import React from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

import withAmplify from '../helpers/withAmplify';

const Login = () => {
  const router = useRouter();

  return (
    <div className="mt-4">
      <AmplifyAuthenticator usernameAlias="username">
        <AmplifySignIn
          slot="sign-in"
          handleAuthStateChange={() => router.push('/')}
        />
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
          handleAuthStateChange={() => router.push('/')}
          slot="sign-up"
        />
      </AmplifyAuthenticator>
    </div>
  );
};

export default withAmplify(Login);
