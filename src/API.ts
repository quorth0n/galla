/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum License {
  by = "by",
  by_sa = "by_sa",
  by_nd = "by_nd",
  by_nc = "by_nc",
  zero = "zero",
  pdm = "pdm",
  copyright = "copyright",
}


export type DeleteUserInput = {
  username: string,
};

export type ModelUserConditionInput = {
  avatar?: ModelStringInput | null,
  bg?: ModelStringInput | null,
  realName?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website?: ModelStringInput | null,
  monthlyViews?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type CreateVoteInput = {
  id?: string | null,
  postID: string,
  owner?: string | null,
  upvote: number,
};

export type ModelVoteConditionInput = {
  postID?: ModelIDInput | null,
  upvote?: ModelIntInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
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

export type UpdateVoteInput = {
  id: string,
  postID?: string | null,
  owner?: string | null,
  upvote?: number | null,
};

export type DeleteVoteInput = {
  id?: string | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  license: License,
  createdAt?: string | null,
  nsfw?: boolean | null,
  userID: string,
  thumb: string,
  resolutions: Array< PublicImageInput | null >,
  quantity?: number | null,
  price?: number | null,
  totalViews?: number | null,
  totalScore?: number | null,
  rank?: number | null,
};

export type PublicImageInput = {
  resMode: string,
  url: string,
  thumb?: boolean | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  license?: ModelLicenseInput | null,
  createdAt?: ModelStringInput | null,
  nsfw?: ModelBooleanInput | null,
  thumb?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  totalViews?: ModelIntInput | null,
  totalScore?: ModelIntInput | null,
  rank?: ModelFloatInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelLicenseInput = {
  eq?: License | null,
  ne?: License | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
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

export type DeletePostInput = {
  id?: string | null,
};

export type CreateTagInput = {
  name: string,
  description?: string | null,
  dailyViews?: number | null,
  weeklyViews?: number | null,
  monthlyViews?: number | null,
  yearlyViews?: number | null,
  totalViews?: number | null,
};

export type ModelTagConditionInput = {
  description?: ModelStringInput | null,
  dailyViews?: ModelIntInput | null,
  weeklyViews?: ModelIntInput | null,
  monthlyViews?: ModelIntInput | null,
  yearlyViews?: ModelIntInput | null,
  totalViews?: ModelIntInput | null,
  and?: Array< ModelTagConditionInput | null > | null,
  or?: Array< ModelTagConditionInput | null > | null,
  not?: ModelTagConditionInput | null,
};

export type DeleteTagInput = {
  name: string,
};

export type CreateCurationInput = {
  id?: string | null,
  owner?: string | null,
  title?: string | null,
  description?: string | null,
  updatedAt?: string | null,
  totalViews?: number | null,
};

export type ModelCurationConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  totalViews?: ModelIntInput | null,
  and?: Array< ModelCurationConditionInput | null > | null,
  or?: Array< ModelCurationConditionInput | null > | null,
  not?: ModelCurationConditionInput | null,
};

export type DeleteCurationInput = {
  id?: string | null,
};

export type DeleteWaitlistInput = {
  id?: string | null,
};

export type ModelWaitlistConditionInput = {
  email?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelWaitlistConditionInput | null > | null,
  or?: Array< ModelWaitlistConditionInput | null > | null,
  not?: ModelWaitlistConditionInput | null,
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

export type CreateTaggedCurationInput = {
  id?: string | null,
  curationID: string,
  tagName: string,
};

export type ModelTaggedCurationConditionInput = {
  curationID?: ModelIDInput | null,
  tagName?: ModelIDInput | null,
  and?: Array< ModelTaggedCurationConditionInput | null > | null,
  or?: Array< ModelTaggedCurationConditionInput | null > | null,
  not?: ModelTaggedCurationConditionInput | null,
};

export type UpdateTaggedCurationInput = {
  id: string,
  curationID?: string | null,
  tagName?: string | null,
};

export type DeleteTaggedCurationInput = {
  id?: string | null,
};

export type CreateCuratedPostInput = {
  id?: string | null,
  order?: number | null,
  postID: string,
  curationID: string,
};

export type ModelCuratedPostConditionInput = {
  order?: ModelIntInput | null,
  postID?: ModelIDInput | null,
  curationID?: ModelIDInput | null,
  and?: Array< ModelCuratedPostConditionInput | null > | null,
  or?: Array< ModelCuratedPostConditionInput | null > | null,
  not?: ModelCuratedPostConditionInput | null,
};

export type UpdateCuratedPostInput = {
  id: string,
  order?: number | null,
  postID?: string | null,
  curationID?: string | null,
};

export type DeleteCuratedPostInput = {
  id?: string | null,
};

export type CreateUserInput = {
  username: string,
  avatar?: string | null,
  bg?: string | null,
  realName?: string | null,
  location?: string | null,
  description?: string | null,
  website?: string | null,
  monthlyViews?: number | null,
};

export type UpdateUserInput = {
  username: string,
  avatar?: string | null,
  bg?: string | null,
  realName?: string | null,
  location?: string | null,
  description?: string | null,
  website?: string | null,
  monthlyViews?: number | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  license?: License | null,
  createdAt?: string | null,
  nsfw?: boolean | null,
  userID?: string | null,
  thumb?: string | null,
  resolutions?: Array< PublicImageInput | null > | null,
  quantity?: number | null,
  price?: number | null,
  totalViews?: number | null,
  totalScore?: number | null,
  rank?: number | null,
};

export type UpdateTagInput = {
  name: string,
  description?: string | null,
  dailyViews?: number | null,
  weeklyViews?: number | null,
  monthlyViews?: number | null,
  yearlyViews?: number | null,
  totalViews?: number | null,
};

export type UpdateCurationInput = {
  id: string,
  owner?: string | null,
  title?: string | null,
  description?: string | null,
  updatedAt?: string | null,
  totalViews?: number | null,
};

export type CreateWaitlistInput = {
  id?: string | null,
  email: string,
  position: number,
};

export type UpdateWaitlistInput = {
  id: string,
  email?: string | null,
  position?: number | null,
};

export type ModelUserFilterInput = {
  username?: ModelIDInput | null,
  avatar?: ModelStringInput | null,
  bg?: ModelStringInput | null,
  realName?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  website?: ModelStringInput | null,
  monthlyViews?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type SearchableUserFilterInput = {
  username?: SearchableIDFilterInput | null,
  avatar?: SearchableStringFilterInput | null,
  bg?: SearchableStringFilterInput | null,
  realName?: SearchableStringFilterInput | null,
  location?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  website?: SearchableStringFilterInput | null,
  monthlyViews?: SearchableIntFilterInput | null,
  and?: Array< SearchableUserFilterInput | null > | null,
  or?: Array< SearchableUserFilterInput | null > | null,
  not?: SearchableUserFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  range?: Array< string | null > | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableIntFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableUserSortableFields {
  username = "username",
  avatar = "avatar",
  bg = "bg",
  realName = "realName",
  location = "location",
  description = "description",
  website = "website",
  monthlyViews = "monthlyViews",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  upvote?: ModelIntInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type ModelIDKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  license?: ModelLicenseInput | null,
  createdAt?: ModelStringInput | null,
  nsfw?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  thumb?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  price?: ModelFloatInput | null,
  totalViews?: ModelIntInput | null,
  totalScore?: ModelIntInput | null,
  rank?: ModelFloatInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type SearchablePostFilterInput = {
  id?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  createdAt?: SearchableStringFilterInput | null,
  nsfw?: SearchableBooleanFilterInput | null,
  userID?: SearchableIDFilterInput | null,
  thumb?: SearchableStringFilterInput | null,
  quantity?: SearchableIntFilterInput | null,
  price?: SearchableFloatFilterInput | null,
  totalViews?: SearchableIntFilterInput | null,
  totalScore?: SearchableIntFilterInput | null,
  rank?: SearchableFloatFilterInput | null,
  and?: Array< SearchablePostFilterInput | null > | null,
  or?: Array< SearchablePostFilterInput | null > | null,
  not?: SearchablePostFilterInput | null,
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type SearchableFloatFilterInput = {
  ne?: number | null,
  gt?: number | null,
  lt?: number | null,
  gte?: number | null,
  lte?: number | null,
  eq?: number | null,
  range?: Array< number | null > | null,
};

export type SearchablePostSortInput = {
  field?: SearchablePostSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchablePostSortableFields {
  id = "id",
  title = "title",
  description = "description",
  createdAt = "createdAt",
  nsfw = "nsfw",
  userID = "userID",
  thumb = "thumb",
  quantity = "quantity",
  price = "price",
  totalViews = "totalViews",
  totalScore = "totalScore",
  rank = "rank",
}


export type ModelTagFilterInput = {
  name?: ModelIDInput | null,
  description?: ModelStringInput | null,
  dailyViews?: ModelIntInput | null,
  weeklyViews?: ModelIntInput | null,
  monthlyViews?: ModelIntInput | null,
  yearlyViews?: ModelIntInput | null,
  totalViews?: ModelIntInput | null,
  and?: Array< ModelTagFilterInput | null > | null,
  or?: Array< ModelTagFilterInput | null > | null,
  not?: ModelTagFilterInput | null,
};

export type SearchableTagFilterInput = {
  name?: SearchableIDFilterInput | null,
  description?: SearchableStringFilterInput | null,
  dailyViews?: SearchableIntFilterInput | null,
  weeklyViews?: SearchableIntFilterInput | null,
  monthlyViews?: SearchableIntFilterInput | null,
  yearlyViews?: SearchableIntFilterInput | null,
  totalViews?: SearchableIntFilterInput | null,
  and?: Array< SearchableTagFilterInput | null > | null,
  or?: Array< SearchableTagFilterInput | null > | null,
  not?: SearchableTagFilterInput | null,
};

export type SearchableTagSortInput = {
  field?: SearchableTagSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableTagSortableFields {
  name = "name",
  description = "description",
  dailyViews = "dailyViews",
  weeklyViews = "weeklyViews",
  monthlyViews = "monthlyViews",
  yearlyViews = "yearlyViews",
  totalViews = "totalViews",
}


export type ModelCurationFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  totalViews?: ModelIntInput | null,
  and?: Array< ModelCurationFilterInput | null > | null,
  or?: Array< ModelCurationFilterInput | null > | null,
  not?: ModelCurationFilterInput | null,
};

export type SearchableCurationFilterInput = {
  id?: SearchableIDFilterInput | null,
  owner?: SearchableIDFilterInput | null,
  title?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  updatedAt?: SearchableStringFilterInput | null,
  totalViews?: SearchableIntFilterInput | null,
  and?: Array< SearchableCurationFilterInput | null > | null,
  or?: Array< SearchableCurationFilterInput | null > | null,
  not?: SearchableCurationFilterInput | null,
};

export type SearchableCurationSortInput = {
  field?: SearchableCurationSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableCurationSortableFields {
  id = "id",
  owner = "owner",
  title = "title",
  description = "description",
  updatedAt = "updatedAt",
  totalViews = "totalViews",
}


export type ModelWaitlistFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  position?: ModelIntInput | null,
  and?: Array< ModelWaitlistFilterInput | null > | null,
  or?: Array< ModelWaitlistFilterInput | null > | null,
  not?: ModelWaitlistFilterInput | null,
};

export type SearchableWaitlistFilterInput = {
  id?: SearchableIDFilterInput | null,
  email?: SearchableStringFilterInput | null,
  position?: SearchableIntFilterInput | null,
  and?: Array< SearchableWaitlistFilterInput | null > | null,
  or?: Array< SearchableWaitlistFilterInput | null > | null,
  not?: SearchableWaitlistFilterInput | null,
};

export type SearchableWaitlistSortInput = {
  field?: SearchableWaitlistSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableWaitlistSortableFields {
  id = "id",
  email = "email",
  position = "position",
}


export type ModelTaggedPostFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  tagName?: ModelIDInput | null,
  and?: Array< ModelTaggedPostFilterInput | null > | null,
  or?: Array< ModelTaggedPostFilterInput | null > | null,
  not?: ModelTaggedPostFilterInput | null,
};

export type ModelTaggedCurationFilterInput = {
  id?: ModelIDInput | null,
  curationID?: ModelIDInput | null,
  tagName?: ModelIDInput | null,
  and?: Array< ModelTaggedCurationFilterInput | null > | null,
  or?: Array< ModelTaggedCurationFilterInput | null > | null,
  not?: ModelTaggedCurationFilterInput | null,
};

export type ModelCuratedPostFilterInput = {
  id?: ModelIDInput | null,
  order?: ModelIntInput | null,
  postID?: ModelIDInput | null,
  curationID?: ModelIDInput | null,
  and?: Array< ModelCuratedPostFilterInput | null > | null,
  or?: Array< ModelCuratedPostFilterInput | null > | null,
  not?: ModelCuratedPostFilterInput | null,
};

export type ViewPostMutationVariables = {
  id: string,
};

export type ViewPostMutation = {
  viewPost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ViewTagMutationVariables = {
  name: string,
};

export type ViewTagMutation = {
  viewTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type VotePostMutationVariables = {
  id: string,
  vote: number,
};

export type VotePostMutation = {
  votePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
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
    username: string,
    avatar: string | null,
    bg: string | null,
    realName: string | null,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote:  {
    __typename: "Vote",
    id: string,
    postID: string,
    owner: string | null,
    upvote: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote:  {
    __typename: "Vote",
    id: string,
    postID: string,
    owner: string | null,
    upvote: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote:  {
    __typename: "Vote",
    id: string,
    postID: string,
    owner: string | null,
    upvote: number,
    createdAt: string,
    updatedAt: string,
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
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
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
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
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
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCurationMutationVariables = {
  input: CreateCurationInput,
  condition?: ModelCurationConditionInput | null,
};

export type CreateCurationMutation = {
  createCuration:  {
    __typename: "Curation",
    id: string,
    owner: string | null,
    title: string | null,
    description: string | null,
    updatedAt: string | null,
    totalViews: number | null,
    createdAt: string,
    tags:  {
      __typename: "ModelTaggedCurationConnection",
      items:  Array< {
        __typename: "TaggedCuration",
        id: string,
        curationID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteCurationMutationVariables = {
  input: DeleteCurationInput,
  condition?: ModelCurationConditionInput | null,
};

export type DeleteCurationMutation = {
  deleteCuration:  {
    __typename: "Curation",
    id: string,
    owner: string | null,
    title: string | null,
    description: string | null,
    updatedAt: string | null,
    totalViews: number | null,
    createdAt: string,
    tags:  {
      __typename: "ModelTaggedCurationConnection",
      items:  Array< {
        __typename: "TaggedCuration",
        id: string,
        curationID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteWaitlistMutationVariables = {
  input: DeleteWaitlistInput,
  condition?: ModelWaitlistConditionInput | null,
};

export type DeleteWaitlistMutation = {
  deleteWaitlist:  {
    __typename: "Waitlist",
    id: string,
    email: string,
    position: number,
    createdAt: string,
    updatedAt: string,
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
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
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
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateTaggedCurationMutationVariables = {
  input: CreateTaggedCurationInput,
  condition?: ModelTaggedCurationConditionInput | null,
};

export type CreateTaggedCurationMutation = {
  createTaggedCuration:  {
    __typename: "TaggedCuration",
    id: string,
    curationID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateTaggedCurationMutationVariables = {
  input: UpdateTaggedCurationInput,
  condition?: ModelTaggedCurationConditionInput | null,
};

export type UpdateTaggedCurationMutation = {
  updateTaggedCuration:  {
    __typename: "TaggedCuration",
    id: string,
    curationID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteTaggedCurationMutationVariables = {
  input: DeleteTaggedCurationInput,
  condition?: ModelTaggedCurationConditionInput | null,
};

export type DeleteTaggedCurationMutation = {
  deleteTaggedCuration:  {
    __typename: "TaggedCuration",
    id: string,
    curationID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateCuratedPostMutationVariables = {
  input: CreateCuratedPostInput,
  condition?: ModelCuratedPostConditionInput | null,
};

export type CreateCuratedPostMutation = {
  createCuratedPost:  {
    __typename: "CuratedPost",
    id: string,
    order: number | null,
    postID: string,
    curationID: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateCuratedPostMutationVariables = {
  input: UpdateCuratedPostInput,
  condition?: ModelCuratedPostConditionInput | null,
};

export type UpdateCuratedPostMutation = {
  updateCuratedPost:  {
    __typename: "CuratedPost",
    id: string,
    order: number | null,
    postID: string,
    curationID: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteCuratedPostMutationVariables = {
  input: DeleteCuratedPostInput,
  condition?: ModelCuratedPostConditionInput | null,
};

export type DeleteCuratedPostMutation = {
  deleteCuratedPost:  {
    __typename: "CuratedPost",
    id: string,
    order: number | null,
    postID: string,
    curationID: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    username: string,
    avatar: string | null,
    bg: string | null,
    realName: string | null,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    username: string,
    avatar: string | null,
    bg: string | null,
    realName: string | null,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    createdAt: string,
    updatedAt: string,
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
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
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
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateCurationMutationVariables = {
  input: UpdateCurationInput,
  condition?: ModelCurationConditionInput | null,
};

export type UpdateCurationMutation = {
  updateCuration:  {
    __typename: "Curation",
    id: string,
    owner: string | null,
    title: string | null,
    description: string | null,
    updatedAt: string | null,
    totalViews: number | null,
    createdAt: string,
    tags:  {
      __typename: "ModelTaggedCurationConnection",
      items:  Array< {
        __typename: "TaggedCuration",
        id: string,
        curationID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateWaitlistMutationVariables = {
  input: CreateWaitlistInput,
  condition?: ModelWaitlistConditionInput | null,
};

export type CreateWaitlistMutation = {
  createWaitlist:  {
    __typename: "Waitlist",
    id: string,
    email: string,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWaitlistMutationVariables = {
  input: UpdateWaitlistInput,
  condition?: ModelWaitlistConditionInput | null,
};

export type UpdateWaitlistMutation = {
  updateWaitlist:  {
    __typename: "Waitlist",
    id: string,
    email: string,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  username: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    username: string,
    avatar: string | null,
    bg: string | null,
    realName: string | null,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  username?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      username: string,
      avatar: string | null,
      bg: string | null,
      realName: string | null,
      location: string | null,
      description: string | null,
      website: string | null,
      monthlyViews: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null,
  sort?: SearchableUserSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchUsersQuery = {
  searchUsers:  {
    __typename: "SearchableUserConnection",
    items:  Array< {
      __typename: "User",
      username: string,
      avatar: string | null,
      bg: string | null,
      realName: string | null,
      location: string | null,
      description: string | null,
      website: string | null,
      monthlyViews: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote:  {
    __typename: "Vote",
    id: string,
    postID: string,
    owner: string | null,
    upvote: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      postID: string,
      owner: string | null,
      upvote: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type VoteByPostByOwnerQueryVariables = {
  postID?: string | null,
  owner?: ModelIDKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VoteByPostByOwnerQuery = {
  voteByPostByOwner:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      postID: string,
      owner: string | null,
      upvote: number,
      createdAt: string,
      updatedAt: string,
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
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
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
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type SearchPostsQueryVariables = {
  filter?: SearchablePostFilterInput | null,
  sort?: SearchablePostSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchPostsQuery = {
  searchPosts:  {
    __typename: "SearchablePostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
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
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
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
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type SearchTagsQueryVariables = {
  filter?: SearchableTagFilterInput | null,
  sort?: SearchableTagSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchTagsQuery = {
  searchTags:  {
    __typename: "SearchableTagConnection",
    items:  Array< {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type ListCurationsQueryVariables = {
  filter?: ModelCurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCurationsQuery = {
  listCurations:  {
    __typename: "ModelCurationConnection",
    items:  Array< {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCurationQueryVariables = {
  id: string,
};

export type GetCurationQuery = {
  getCuration:  {
    __typename: "Curation",
    id: string,
    owner: string | null,
    title: string | null,
    description: string | null,
    updatedAt: string | null,
    totalViews: number | null,
    createdAt: string,
    tags:  {
      __typename: "ModelTaggedCurationConnection",
      items:  Array< {
        __typename: "TaggedCuration",
        id: string,
        curationID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type SearchCurationsQueryVariables = {
  filter?: SearchableCurationFilterInput | null,
  sort?: SearchableCurationSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchCurationsQuery = {
  searchCurations:  {
    __typename: "SearchableCurationConnection",
    items:  Array< {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type GetWaitlistQueryVariables = {
  id: string,
};

export type GetWaitlistQuery = {
  getWaitlist:  {
    __typename: "Waitlist",
    id: string,
    email: string,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWaitlistsQueryVariables = {
  filter?: ModelWaitlistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWaitlistsQuery = {
  listWaitlists:  {
    __typename: "ModelWaitlistConnection",
    items:  Array< {
      __typename: "Waitlist",
      id: string,
      email: string,
      position: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchWaitlistsQueryVariables = {
  filter?: SearchableWaitlistFilterInput | null,
  sort?: SearchableWaitlistSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchWaitlistsQuery = {
  searchWaitlists:  {
    __typename: "SearchableWaitlistConnection",
    items:  Array< {
      __typename: "Waitlist",
      id: string,
      email: string,
      position: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type GetTaggedPostQueryVariables = {
  id: string,
};

export type GetTaggedPostQuery = {
  getTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListTaggedPostsQueryVariables = {
  filter?: ModelTaggedPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaggedPostsQuery = {
  listTaggedPosts:  {
    __typename: "ModelTaggedPostConnection",
    items:  Array< {
      __typename: "TaggedPost",
      id: string,
      postID: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      post:  {
        __typename: "Post",
        id: string,
        title: string,
        description: string | null,
        license: License,
        createdAt: string | null,
        nsfw: boolean | null,
        userID: string,
        thumb: string,
        quantity: number | null,
        price: number | null,
        totalViews: number | null,
        totalScore: number | null,
        rank: number | null,
        updatedAt: string,
      } | null,
      tag:  {
        __typename: "Tag",
        name: string,
        description: string | null,
        dailyViews: number | null,
        weeklyViews: number | null,
        monthlyViews: number | null,
        yearlyViews: number | null,
        totalViews: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTaggedCurationQueryVariables = {
  id: string,
};

export type GetTaggedCurationQuery = {
  getTaggedCuration:  {
    __typename: "TaggedCuration",
    id: string,
    curationID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListTaggedCurationsQueryVariables = {
  filter?: ModelTaggedCurationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaggedCurationsQuery = {
  listTaggedCurations:  {
    __typename: "ModelTaggedCurationConnection",
    items:  Array< {
      __typename: "TaggedCuration",
      id: string,
      curationID: string,
      tagName: string,
      createdAt: string,
      updatedAt: string,
      tag:  {
        __typename: "Tag",
        name: string,
        description: string | null,
        dailyViews: number | null,
        weeklyViews: number | null,
        monthlyViews: number | null,
        yearlyViews: number | null,
        totalViews: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      curation:  {
        __typename: "Curation",
        id: string,
        owner: string | null,
        title: string | null,
        description: string | null,
        updatedAt: string | null,
        totalViews: number | null,
        createdAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCuratedPostQueryVariables = {
  id: string,
};

export type GetCuratedPostQuery = {
  getCuratedPost:  {
    __typename: "CuratedPost",
    id: string,
    order: number | null,
    postID: string,
    curationID: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListCuratedPostsQueryVariables = {
  filter?: ModelCuratedPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCuratedPostsQuery = {
  listCuratedPosts:  {
    __typename: "ModelCuratedPostConnection",
    items:  Array< {
      __typename: "CuratedPost",
      id: string,
      order: number | null,
      postID: string,
      curationID: string,
      createdAt: string,
      updatedAt: string,
      post:  {
        __typename: "Post",
        id: string,
        title: string,
        description: string | null,
        license: License,
        createdAt: string | null,
        nsfw: boolean | null,
        userID: string,
        thumb: string,
        quantity: number | null,
        price: number | null,
        totalViews: number | null,
        totalScore: number | null,
        rank: number | null,
        updatedAt: string,
      } | null,
      curation:  {
        __typename: "Curation",
        id: string,
        owner: string | null,
        title: string | null,
        description: string | null,
        updatedAt: string | null,
        totalViews: number | null,
        createdAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  username?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    username: string,
    avatar: string | null,
    bg: string | null,
    realName: string | null,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  username?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    username: string,
    avatar: string | null,
    bg: string | null,
    realName: string | null,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  username?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    username: string,
    avatar: string | null,
    bg: string | null,
    realName: string | null,
    location: string | null,
    description: string | null,
    website: string | null,
    monthlyViews: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateVoteSubscriptionVariables = {
  owner: string,
};

export type OnCreateVoteSubscription = {
  onCreateVote:  {
    __typename: "Vote",
    id: string,
    postID: string,
    owner: string | null,
    upvote: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoteSubscriptionVariables = {
  owner: string,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote:  {
    __typename: "Vote",
    id: string,
    postID: string,
    owner: string | null,
    upvote: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoteSubscriptionVariables = {
  owner: string,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote:  {
    __typename: "Vote",
    id: string,
    postID: string,
    owner: string | null,
    upvote: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost:  {
    __typename: "Post",
    id: string,
    title: string,
    description: string | null,
    license: License,
    createdAt: string | null,
    nsfw: boolean | null,
    userID: string,
    thumb: string,
    resolutions:  Array< {
      __typename: "PublicImage",
      resMode: string,
      url: string,
      thumb: boolean | null,
    } | null >,
    quantity: number | null,
    price: number | null,
    totalViews: number | null,
    totalScore: number | null,
    rank: number | null,
    updatedAt: string,
    tags:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    curations:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateTagSubscription = {
  onCreateTag:  {
    __typename: "Tag",
    name: string,
    description: string | null,
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
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
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
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
    dailyViews: number | null,
    weeklyViews: number | null,
    monthlyViews: number | null,
    yearlyViews: number | null,
    totalViews: number | null,
    createdAt: string,
    updatedAt: string,
    posts:  {
      __typename: "ModelTaggedPostConnection",
      items:  Array< {
        __typename: "TaggedPost",
        id: string,
        postID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCurationSubscription = {
  onCreateCuration:  {
    __typename: "Curation",
    id: string,
    owner: string | null,
    title: string | null,
    description: string | null,
    updatedAt: string | null,
    totalViews: number | null,
    createdAt: string,
    tags:  {
      __typename: "ModelTaggedCurationConnection",
      items:  Array< {
        __typename: "TaggedCuration",
        id: string,
        curationID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateCurationSubscription = {
  onUpdateCuration:  {
    __typename: "Curation",
    id: string,
    owner: string | null,
    title: string | null,
    description: string | null,
    updatedAt: string | null,
    totalViews: number | null,
    createdAt: string,
    tags:  {
      __typename: "ModelTaggedCurationConnection",
      items:  Array< {
        __typename: "TaggedCuration",
        id: string,
        curationID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteCurationSubscription = {
  onDeleteCuration:  {
    __typename: "Curation",
    id: string,
    owner: string | null,
    title: string | null,
    description: string | null,
    updatedAt: string | null,
    totalViews: number | null,
    createdAt: string,
    tags:  {
      __typename: "ModelTaggedCurationConnection",
      items:  Array< {
        __typename: "TaggedCuration",
        id: string,
        curationID: string,
        tagName: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    posts:  {
      __typename: "ModelCuratedPostConnection",
      items:  Array< {
        __typename: "CuratedPost",
        id: string,
        order: number | null,
        postID: string,
        curationID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateWaitlistSubscription = {
  onCreateWaitlist:  {
    __typename: "Waitlist",
    id: string,
    email: string,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWaitlistSubscription = {
  onUpdateWaitlist:  {
    __typename: "Waitlist",
    id: string,
    email: string,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWaitlistSubscription = {
  onDeleteWaitlist:  {
    __typename: "Waitlist",
    id: string,
    email: string,
    position: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTaggedPostSubscription = {
  onCreateTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTaggedPostSubscription = {
  onUpdateTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTaggedPostSubscription = {
  onDeleteTaggedPost:  {
    __typename: "TaggedPost",
    id: string,
    postID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateTaggedCurationSubscription = {
  onCreateTaggedCuration:  {
    __typename: "TaggedCuration",
    id: string,
    curationID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateTaggedCurationSubscription = {
  onUpdateTaggedCuration:  {
    __typename: "TaggedCuration",
    id: string,
    curationID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteTaggedCurationSubscription = {
  onDeleteTaggedCuration:  {
    __typename: "TaggedCuration",
    id: string,
    curationID: string,
    tagName: string,
    createdAt: string,
    updatedAt: string,
    tag:  {
      __typename: "Tag",
      name: string,
      description: string | null,
      dailyViews: number | null,
      weeklyViews: number | null,
      monthlyViews: number | null,
      yearlyViews: number | null,
      totalViews: number | null,
      createdAt: string,
      updatedAt: string,
      posts:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateCuratedPostSubscription = {
  onCreateCuratedPost:  {
    __typename: "CuratedPost",
    id: string,
    order: number | null,
    postID: string,
    curationID: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateCuratedPostSubscription = {
  onUpdateCuratedPost:  {
    __typename: "CuratedPost",
    id: string,
    order: number | null,
    postID: string,
    curationID: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteCuratedPostSubscription = {
  onDeleteCuratedPost:  {
    __typename: "CuratedPost",
    id: string,
    order: number | null,
    postID: string,
    curationID: string,
    createdAt: string,
    updatedAt: string,
    post:  {
      __typename: "Post",
      id: string,
      title: string,
      description: string | null,
      license: License,
      createdAt: string | null,
      nsfw: boolean | null,
      userID: string,
      thumb: string,
      resolutions:  Array< {
        __typename: "PublicImage",
        resMode: string,
        url: string,
        thumb: boolean | null,
      } | null >,
      quantity: number | null,
      price: number | null,
      totalViews: number | null,
      totalScore: number | null,
      rank: number | null,
      updatedAt: string,
      tags:  {
        __typename: "ModelTaggedPostConnection",
        nextToken: string | null,
      } | null,
      curations:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
    curation:  {
      __typename: "Curation",
      id: string,
      owner: string | null,
      title: string | null,
      description: string | null,
      updatedAt: string | null,
      totalViews: number | null,
      createdAt: string,
      tags:  {
        __typename: "ModelTaggedCurationConnection",
        nextToken: string | null,
      } | null,
      posts:  {
        __typename: "ModelCuratedPostConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};
