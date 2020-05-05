import React from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';

import withAmplify from '../helpers/withAmplify';

const Login = () => (
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

export default withAmplify(Login);
