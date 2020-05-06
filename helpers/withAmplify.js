import React from 'react';
import Amplify from 'aws-amplify';
import awsExports from '../src/aws-exports';

export default (Component) => ({ ...props }) => {
  Amplify.configure(awsExports);
  console.log('ran amplify configure');
  return <Component {...props} />;
};
