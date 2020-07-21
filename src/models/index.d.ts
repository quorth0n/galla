import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Image {
  readonly resMode: string;
  readonly image?: S3Object;
  readonly thumb?: string;
  constructor(init: ModelInit<Image>);
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly createdAt?: string;
  readonly userID: string;
  readonly tags?: TaggedPost[];
  readonly thumb: string;
  readonly resolutions: Image[];
  readonly monthlyViews?: number;
  readonly totalViews?: number;
  readonly votes?: Vote[];
  readonly totalScore?: number;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class TaggedPost {
  readonly id: string;
  readonly post?: Post;
  readonly tag?: Tag;
  constructor(init: ModelInit<TaggedPost>);
  static copyOf(source: TaggedPost, mutator: (draft: MutableModel<TaggedPost>) => MutableModel<TaggedPost> | void): TaggedPost;
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly posts?: TaggedPost[];
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

export declare class Vote {
  readonly id: string;
  readonly postID: string;
  readonly owner: string;
  readonly upvote: number;
  constructor(init: ModelInit<Vote>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote>) => MutableModel<Vote> | void): Vote;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly location?: string;
  readonly description?: string;
  readonly website?: string;
  readonly monthlyViews?: number;
  readonly posts?: Post[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}