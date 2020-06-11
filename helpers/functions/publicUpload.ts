import { Storage } from 'aws-amplify';
import awsExports from '../../src/aws-exports';

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = awsExports;

export default async (
  file: File,
  name: String,
  maxSize: Number = 1 * 1000 * 1000
) => {
  if (file) {
    // size validation
    if (file.size > maxSize) {
      throw new Error(`Cannot be larger than ${+maxSize / (1000 * 1000)} MB`);
    }

    const extension = file.name.split('.')[1];
    const { type: mimeType } = file;
    const key = `${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      await Storage.put(key, file, {
        contentType: mimeType,
      });
      return url;
    } catch (err) {
      console.log('error: ', err);
    }
  } else {
    console.log('no file, skipping');
    return null;
  }
};
