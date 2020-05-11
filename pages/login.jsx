import React from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';
import { useRouter } from 'next/router';

import withAmplify from '../helpers/withAmplify';
import useCognitoUser from '../helpers/useCognitoUser';

const Login = () => {
  const router = useRouter();
  const user = useCognitoUser();
  if (user) router.push('/post/test');

  return (
    <div className="mt-4">
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

export default withAmplify(Login);
