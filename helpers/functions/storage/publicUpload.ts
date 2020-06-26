import { Storage } from 'aws-amplify';
import getUrlForPublicKey from './getUrlForPublicKey';

export default async (
  file: File,
  name: string,
  maxSize: number = 1 * 1000 * 1000
) => {
  if (!file) {
    console.log('no file, skipping');
    return null;
  }

  // size validation
  if (file.size > maxSize) {
    throw new Error(`Cannot be larger than ${maxSize / (1000 * 1000)} MB`);
  }

  const extension = file.name.split('.')[1];
  const { type: mimeType } = file;
  const key = `${name}.${extension}`;
  await Storage.put(key, file, {
    contentType: mimeType,
  });
  return getUrlForPublicKey(key);
};
