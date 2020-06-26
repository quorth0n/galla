import awsExports from '../../../src/aws-exports';

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = awsExports;

export default (key: string) =>
  `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
