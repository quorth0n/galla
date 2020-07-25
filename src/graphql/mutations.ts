/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const viewPost = /* GraphQL */ `
  mutation ViewPost($id: ID!) {
    viewPost(id: $id) {
      id
      title
      description
      license
      createdAt
      nsfw
      userID
      thumb
      resolutions {
        resMode
        url
        thumb
      }
      quantity
      price
      totalViews
      totalScore
      rank
      updatedAt
      tags {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      curations {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const viewTag = /* GraphQL */ `
  mutation ViewTag($name: ID!) {
    viewTag(name: $name) {
      name
      description
      dailyViews
      weeklyViews
      monthlyViews
      yearlyViews
      totalViews
      createdAt
      updatedAt
      posts {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const votePost = /* GraphQL */ `
  mutation VotePost($id: ID!, $vote: Int!) {
    votePost(id: $id, vote: $vote) {
      id
      title
      description
      license
      createdAt
      nsfw
      userID
      thumb
      resolutions {
        resMode
        url
        thumb
      }
      quantity
      price
      totalViews
      totalScore
      rank
      updatedAt
      tags {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      curations {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      username
      avatar
      bg
      realName
      location
      description
      website
      monthlyViews
      createdAt
      updatedAt
    }
  }
`;
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      postID
      owner
      upvote
      createdAt
      updatedAt
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      postID
      owner
      upvote
      createdAt
      updatedAt
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      postID
      owner
      upvote
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      description
      license
      createdAt
      nsfw
      userID
      thumb
      resolutions {
        resMode
        url
        thumb
      }
      quantity
      price
      totalViews
      totalScore
      rank
      updatedAt
      tags {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      curations {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      description
      license
      createdAt
      nsfw
      userID
      thumb
      resolutions {
        resMode
        url
        thumb
      }
      quantity
      price
      totalViews
      totalScore
      rank
      updatedAt
      tags {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      curations {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      name
      description
      dailyViews
      weeklyViews
      monthlyViews
      yearlyViews
      totalViews
      createdAt
      updatedAt
      posts {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      name
      description
      dailyViews
      weeklyViews
      monthlyViews
      yearlyViews
      totalViews
      createdAt
      updatedAt
      posts {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createCuration = /* GraphQL */ `
  mutation CreateCuration(
    $input: CreateCurationInput!
    $condition: ModelCurationConditionInput
  ) {
    createCuration(input: $input, condition: $condition) {
      id
      owner
      title
      description
      updatedAt
      totalViews
      createdAt
      tags {
        items {
          id
          curationID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteCuration = /* GraphQL */ `
  mutation DeleteCuration(
    $input: DeleteCurationInput!
    $condition: ModelCurationConditionInput
  ) {
    deleteCuration(input: $input, condition: $condition) {
      id
      owner
      title
      description
      updatedAt
      totalViews
      createdAt
      tags {
        items {
          id
          curationID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteWaitlist = /* GraphQL */ `
  mutation DeleteWaitlist(
    $input: DeleteWaitlistInput!
    $condition: ModelWaitlistConditionInput
  ) {
    deleteWaitlist(input: $input, condition: $condition) {
      id
      email
      position
      createdAt
      updatedAt
    }
  }
`;
export const createTaggedPost = /* GraphQL */ `
  mutation CreateTaggedPost(
    $input: CreateTaggedPostInput!
    $condition: ModelTaggedPostConditionInput
  ) {
    createTaggedPost(input: $input, condition: $condition) {
      id
      postID
      tagName
      createdAt
      updatedAt
      post {
        id
        title
        description
        license
        createdAt
        nsfw
        userID
        thumb
        resolutions {
          resMode
          url
          thumb
        }
        quantity
        price
        totalViews
        totalScore
        rank
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
      }
      tag {
        name
        description
        dailyViews
        weeklyViews
        monthlyViews
        yearlyViews
        totalViews
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const updateTaggedPost = /* GraphQL */ `
  mutation UpdateTaggedPost(
    $input: UpdateTaggedPostInput!
    $condition: ModelTaggedPostConditionInput
  ) {
    updateTaggedPost(input: $input, condition: $condition) {
      id
      postID
      tagName
      createdAt
      updatedAt
      post {
        id
        title
        description
        license
        createdAt
        nsfw
        userID
        thumb
        resolutions {
          resMode
          url
          thumb
        }
        quantity
        price
        totalViews
        totalScore
        rank
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
      }
      tag {
        name
        description
        dailyViews
        weeklyViews
        monthlyViews
        yearlyViews
        totalViews
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const deleteTaggedPost = /* GraphQL */ `
  mutation DeleteTaggedPost(
    $input: DeleteTaggedPostInput!
    $condition: ModelTaggedPostConditionInput
  ) {
    deleteTaggedPost(input: $input, condition: $condition) {
      id
      postID
      tagName
      createdAt
      updatedAt
      post {
        id
        title
        description
        license
        createdAt
        nsfw
        userID
        thumb
        resolutions {
          resMode
          url
          thumb
        }
        quantity
        price
        totalViews
        totalScore
        rank
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
      }
      tag {
        name
        description
        dailyViews
        weeklyViews
        monthlyViews
        yearlyViews
        totalViews
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const createTaggedCuration = /* GraphQL */ `
  mutation CreateTaggedCuration(
    $input: CreateTaggedCurationInput!
    $condition: ModelTaggedCurationConditionInput
  ) {
    createTaggedCuration(input: $input, condition: $condition) {
      id
      curationID
      tagName
      createdAt
      updatedAt
      tag {
        name
        description
        dailyViews
        weeklyViews
        monthlyViews
        yearlyViews
        totalViews
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      curation {
        id
        owner
        title
        description
        updatedAt
        totalViews
        createdAt
        tags {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const updateTaggedCuration = /* GraphQL */ `
  mutation UpdateTaggedCuration(
    $input: UpdateTaggedCurationInput!
    $condition: ModelTaggedCurationConditionInput
  ) {
    updateTaggedCuration(input: $input, condition: $condition) {
      id
      curationID
      tagName
      createdAt
      updatedAt
      tag {
        name
        description
        dailyViews
        weeklyViews
        monthlyViews
        yearlyViews
        totalViews
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      curation {
        id
        owner
        title
        description
        updatedAt
        totalViews
        createdAt
        tags {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const deleteTaggedCuration = /* GraphQL */ `
  mutation DeleteTaggedCuration(
    $input: DeleteTaggedCurationInput!
    $condition: ModelTaggedCurationConditionInput
  ) {
    deleteTaggedCuration(input: $input, condition: $condition) {
      id
      curationID
      tagName
      createdAt
      updatedAt
      tag {
        name
        description
        dailyViews
        weeklyViews
        monthlyViews
        yearlyViews
        totalViews
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      curation {
        id
        owner
        title
        description
        updatedAt
        totalViews
        createdAt
        tags {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const createCuratedPost = /* GraphQL */ `
  mutation CreateCuratedPost(
    $input: CreateCuratedPostInput!
    $condition: ModelCuratedPostConditionInput
  ) {
    createCuratedPost(input: $input, condition: $condition) {
      id
      order
      postID
      curationID
      createdAt
      updatedAt
      post {
        id
        title
        description
        license
        createdAt
        nsfw
        userID
        thumb
        resolutions {
          resMode
          url
          thumb
        }
        quantity
        price
        totalViews
        totalScore
        rank
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
      }
      curation {
        id
        owner
        title
        description
        updatedAt
        totalViews
        createdAt
        tags {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const updateCuratedPost = /* GraphQL */ `
  mutation UpdateCuratedPost(
    $input: UpdateCuratedPostInput!
    $condition: ModelCuratedPostConditionInput
  ) {
    updateCuratedPost(input: $input, condition: $condition) {
      id
      order
      postID
      curationID
      createdAt
      updatedAt
      post {
        id
        title
        description
        license
        createdAt
        nsfw
        userID
        thumb
        resolutions {
          resMode
          url
          thumb
        }
        quantity
        price
        totalViews
        totalScore
        rank
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
      }
      curation {
        id
        owner
        title
        description
        updatedAt
        totalViews
        createdAt
        tags {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const deleteCuratedPost = /* GraphQL */ `
  mutation DeleteCuratedPost(
    $input: DeleteCuratedPostInput!
    $condition: ModelCuratedPostConditionInput
  ) {
    deleteCuratedPost(input: $input, condition: $condition) {
      id
      order
      postID
      curationID
      createdAt
      updatedAt
      post {
        id
        title
        description
        license
        createdAt
        nsfw
        userID
        thumb
        resolutions {
          resMode
          url
          thumb
        }
        quantity
        price
        totalViews
        totalScore
        rank
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
      }
      curation {
        id
        owner
        title
        description
        updatedAt
        totalViews
        createdAt
        tags {
          nextToken
        }
        posts {
          nextToken
        }
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      username
      avatar
      bg
      realName
      location
      description
      website
      monthlyViews
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      username
      avatar
      bg
      realName
      location
      description
      website
      monthlyViews
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      description
      license
      createdAt
      nsfw
      userID
      thumb
      resolutions {
        resMode
        url
        thumb
      }
      quantity
      price
      totalViews
      totalScore
      rank
      updatedAt
      tags {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      curations {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      name
      description
      dailyViews
      weeklyViews
      monthlyViews
      yearlyViews
      totalViews
      createdAt
      updatedAt
      posts {
        items {
          id
          postID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateCuration = /* GraphQL */ `
  mutation UpdateCuration(
    $input: UpdateCurationInput!
    $condition: ModelCurationConditionInput
  ) {
    updateCuration(input: $input, condition: $condition) {
      id
      owner
      title
      description
      updatedAt
      totalViews
      createdAt
      tags {
        items {
          id
          curationID
          tagName
          createdAt
          updatedAt
        }
        nextToken
      }
      posts {
        items {
          id
          order
          postID
          curationID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createWaitlist = /* GraphQL */ `
  mutation CreateWaitlist(
    $input: CreateWaitlistInput!
    $condition: ModelWaitlistConditionInput
  ) {
    createWaitlist(input: $input, condition: $condition) {
      id
      email
      position
      createdAt
      updatedAt
    }
  }
`;
export const updateWaitlist = /* GraphQL */ `
  mutation UpdateWaitlist(
    $input: UpdateWaitlistInput!
    $condition: ModelWaitlistConditionInput
  ) {
    updateWaitlist(input: $input, condition: $condition) {
      id
      email
      position
      createdAt
      updatedAt
    }
  }
`;
