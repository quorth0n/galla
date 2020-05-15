/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  location?: string | null,
  description?: string | null,
  website?: string | null,
  monthlyViews?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelIDInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website?: ModelStringInput | null,
  monthlyViews?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  location?: string | null,
  description?: string | null,
  website?: string | null,
  monthlyViews?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  description: string,
  createdAt: string,
  userID: string,
  thumb: string,
  resolutions: Array< ImageInput | null >,
  dailyViews?: number | null,
  monthlyViews?: number | null,
  totalViews?: number | null,
  votes?: Array< VoteInput > | null,
  totalScore?: number | null,
};

export type ImageInput = {
  resMode: string,
  image?: S3ObjectInput | null,
  thumb?: string | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type VoteInput = {
  owner: string,
  upvote: boolean,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  thumb?: ModelStringInput | null,
  dailyViews?: ModelIntInput | null,
  monthlyViews?: ModelIntInput | null,
  totalViews?: ModelIntInput | null,
  totalScore?: ModelIntInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type DeletePostInput = {
  id?: string | null,
};

export type CreateTaggedPostInput = {
  id?: string | null,
  postID: string,
  tagName: string,
};

export type ModelTaggedPostConditionInput = {
  postID?: ModelIDInput | null,
  tagName?: ModelIDInput | null,
  and?: Array< ModelTaggedPostConditionInput | null > | null,
  or?: Array< ModelTaggedPostConditionInput | null > | null,
  not?: ModelTaggedPostConditionInput | null,
};

export type UpdateTaggedPostInput = {
  id: string,
  postID?: string | null,
  tagName?: string | null,
};

export type DeleteTaggedPostInput = {
  id?: string | null,
};

export type CreateTagInput = {
  name: string,
  description?: string | null,
};

export type ModelTagConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type UpdateTagInput = {
  name: string,
  description?: string | null,
};

export type DeleteTagInput = {
  name: string,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  createdAt?: string | null,
  userID?: string | null,
  thumb?: string | null,
  resolutions?: Array< ImageInput | null > | null,
  dailyViews?: number | null,
  monthlyViews?: number | null,
  totalViews?: number | null,
  votes?: Array< VoteInput > | null,
  totalScore?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelIDInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website?: ModelStringInput | null,
  monthlyViews?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  thumb?: ModelStringInput | null,
  dailyViews?: ModelIntInput | null,
  monthlyViews?: ModelIntInput | null,
  totalViews?: ModelIntInput | null,
  totalScore?: ModelIntInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelTagFilterInput = {
  name?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    username: string,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    owner: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        createdAt: string,
        userID: string,
        thumb: string,
        dailyViews: number | null,
        monthlyViews: number | null,
        totalViews: number | null,
        totalScore: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    username: string,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    owner: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        createdAt: string,
        userID: string,
        thumb: string,
        dailyViews: number | null,
        monthlyViews: number | null,
        totalViews: number | null,
        totalScore: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    owner: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        createdAt: string,
        userID: string,
        thumb: string,
        dailyViews: number | null,
        monthlyViews: number | null,
        totalViews: number | null,
        totalScore: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "Image",
      resMode: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      thumb: string | null,
    } | null >,
    dailyViews: number | null,
    monthlyViews: number | null,
    totalViews: number | null,
    votes:  Array< {
      __typename: "Vote",
      owner: string,
      upvote: boolean,
    } > | null,
    totalScore: number | null,
    owner: string | null,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "Image",
      resMode: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      thumb: string | null,
    } | null >,
    dailyViews: number | null,
    monthlyViews: number | null,
    totalViews: number | null,
    votes:  Array< {
      __typename: "Vote",
      owner: string,
      upvote: boolean,
    } > | null,
    totalScore: number | null,
    owner: string | null,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateTaggedPostMutationVariables = {
  input: CreateTaggedPostInput,
  condition?: ModelTaggedPostConditionInput | null,
};

export type CreateTaggedPostMutation = {
  createTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "Image",
        resMode: string,
        thumb: string | null,
      } | null >,
      dailyViews: number | null,
      monthlyViews: number | null,
      totalViews: number | null,
      votes:  Array< {
        __typename: "Vote",
        owner: string,
        upvote: boolean,
      } > | null,
      totalScore: number | null,
      owner: string | null,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type UpdateTaggedPostMutationVariables = {
  input: UpdateTaggedPostInput,
  condition?: ModelTaggedPostConditionInput | null,
};

export type UpdateTaggedPostMutation = {
  updateTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "Image",
        resMode: string,
        thumb: string | null,
      } | null >,
      dailyViews: number | null,
      monthlyViews: number | null,
      totalViews: number | null,
      votes:  Array< {
        __typename: "Vote",
        owner: string,
        upvote: boolean,
      } > | null,
      totalScore: number | null,
      owner: string | null,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type DeleteTaggedPostMutationVariables = {
  input: DeleteTaggedPostInput,
  condition?: ModelTaggedPostConditionInput | null,
};

export type DeleteTaggedPostMutation = {
  deleteTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "Image",
        resMode: string,
        thumb: string | null,
      } | null >,
      dailyViews: number | null,
      monthlyViews: number | null,
      totalViews: number | null,
      votes:  Array< {
        __typename: "Vote",
        owner: string,
        upvote: boolean,
      } > | null,
      totalScore: number | null,
      owner: string | null,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type CreateTagMutationVariables = {
  input: CreateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type CreateTagMutation = {
  createTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateTagMutationVariables = {
  input: UpdateTagInput,
  condition?: ModelTagConditionInput | null,
};

export type UpdateTagMutation = {
  updateTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteTagMutationVariables = {
  input: DeleteTagInput,
  condition?: ModelTagConditionInput | null,
};

export type DeleteTagMutation = {
  deleteTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "Image",
      resMode: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      thumb: string | null,
    } | null >,
    dailyViews: number | null,
    monthlyViews: number | null,
    totalViews: number | null,
    votes:  Array< {
      __typename: "Vote",
      owner: string,
      upvote: boolean,
    } > | null,
    totalScore: number | null,
    owner: string | null,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    username: string,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    owner: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        createdAt: string,
        userID: string,
        thumb: string,
        dailyViews: number | null,
        monthlyViews: number | null,
        totalViews: number | null,
        totalScore: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      location: string | null,
      description: string | null,
      website: string | null,
      monthlyViews: number | null,
      owner: string | null,
      posts:  {
        __typename: "ModelPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "Image",
        resMode: string,
        thumb: string | null,
      } | null >,
      dailyViews: number | null,
      monthlyViews: number | null,
      totalViews: number | null,
      votes:  Array< {
        __typename: "Vote",
        owner: string,
        upvote: boolean,
      } > | null,
      totalScore: number | null,
      owner: string | null,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "Image",
      resMode: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      thumb: string | null,
    } | null >,
    dailyViews: number | null,
    monthlyViews: number | null,
    totalViews: number | null,
    votes:  Array< {
      __typename: "Vote",
      owner: string,
      upvote: boolean,
    } > | null,
    totalScore: number | null,
    owner: string | null,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListTagsQueryVariables = {
  name?: string | null,
  filter?: ModelTagFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTagsQuery = {
  listTags:  {
    __typename: "ModelTagConnection",
    items:  Array< {
      __typename: "Tag",
      name: string,
      description: string | null,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTagQueryVariables = {
  name: string,
};

export type GetTagQuery = {
  getTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    username: string,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    owner: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        createdAt: string,
        userID: string,
        thumb: string,
        dailyViews: number | null,
        monthlyViews: number | null,
        totalViews: number | null,
        totalScore: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    username: string,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    owner: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        createdAt: string,
        userID: string,
        thumb: string,
        dailyViews: number | null,
        monthlyViews: number | null,
        totalViews: number | null,
        totalScore: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    username: string,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    owner: string | null,
    posts:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        description: string,
        createdAt: string,
        userID: string,
        thumb: string,
        dailyViews: number | null,
        monthlyViews: number | null,
        totalViews: number | null,
        totalScore: number | null,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner: string,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "Image",
      resMode: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      thumb: string | null,
    } | null >,
    dailyViews: number | null,
    monthlyViews: number | null,
    totalViews: number | null,
    votes:  Array< {
      __typename: "Vote",
      owner: string,
      upvote: boolean,
    } > | null,
    totalScore: number | null,
    owner: string | null,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner: string,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "Image",
      resMode: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      thumb: string | null,
    } | null >,
    dailyViews: number | null,
    monthlyViews: number | null,
    totalViews: number | null,
    votes:  Array< {
      __typename: "Vote",
      owner: string,
      upvote: boolean,
    } > | null,
    totalScore: number | null,
    owner: string | null,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTaggedPostSubscription = {
  onCreateTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "Image",
        resMode: string,
        thumb: string | null,
      } | null >,
      dailyViews: number | null,
      monthlyViews: number | null,
      totalViews: number | null,
      votes:  Array< {
        __typename: "Vote",
        owner: string,
        upvote: boolean,
      } > | null,
      totalScore: number | null,
      owner: string | null,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateTaggedPostSubscription = {
  onUpdateTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "Image",
        resMode: string,
        thumb: string | null,
      } | null >,
      dailyViews: number | null,
      monthlyViews: number | null,
      totalViews: number | null,
      votes:  Array< {
        __typename: "Vote",
        owner: string,
        upvote: boolean,
      } > | null,
      totalScore: number | null,
      owner: string | null,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteTaggedPostSubscription = {
  onDeleteTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string,
      createdAt: string,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "Image",
        resMode: string,
        thumb: string | null,
      } | null >,
      dailyViews: number | null,
      monthlyViews: number | null,
      totalViews: number | null,
      votes:  Array< {
        __typename: "Vote",
        owner: string,
        upvote: boolean,
      } > | null,
      totalScore: number | null,
      owner: string | null,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateTagSubscription = {
  onUpdateTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteTagSubscription = {
  onDeleteTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string,
    createdAt: string,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "Image",
      resMode: string,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      thumb: string | null,
    } | null >,
    dailyViews: number | null,
    monthlyViews: number | null,
    totalViews: number | null,
    votes:  Array< {
      __typename: "Vote",
      owner: string,
      upvote: boolean,
    } > | null,
    totalScore: number | null,
    owner: string | null,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};
