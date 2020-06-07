import React from 'react';
import Amplify from 'aws-amplify';
import awsExports from '../src/aws-exports';

export const configure = () => {
  Amplify.configure(awsExports);
};

export default (Component) => ({ ...props }) => {
  const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket,
  } = awsExports;
  console.log(region);

  return <Component region={region} bucket={bucket} {...props} />;
};
