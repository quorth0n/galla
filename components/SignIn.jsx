import React from 'react';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
} from '@aws-amplify/ui-react';

const SignIn = () => (
  <main className="px-4 pt-24">
    <AmplifyAuthenticator usernameAlias="username">
      <AmplifySignIn slot="sign-in">
        <div slot="secondary-footer-content">Signup is currently closed</div>
      </AmplifySignIn>
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
  </main>
);
export default React.memo(SignIn);
