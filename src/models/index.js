// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, TaggedPost, Tag, Vote, User, Image, S3Object } = initSchema(schema);

export {
  Post,
  TaggedPost,
  Tag,
  Vote,
  User,
  Image,
  S3Object
};