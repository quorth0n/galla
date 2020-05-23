/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const viewPost = /* GraphQL */ `
  mutation ViewPost($id: ID!) {
    viewPost(id: $id) {
      id
      title
      description
      createdAt
      userID
      thumb
      resolutions {
        resMode
        image {
          bucket
          region
          key
        }
        thumb
      }
      totalScore
      votes {
        items {
          id
          postID
          owner
          upvote
        }
        nextToken
      }
      monthlyViews
      totalViews
      tags {
        items {
          postID
          tagName
        }
        nextToken
      }
    }
  }
`;
export const upvotePost = /* GraphQL */ `
  mutation UpvotePost($id: ID!) {
    upvotePost(id: $id) {
      id
      title
      description
      createdAt
      userID
      thumb
      resolutions {
        resMode
        image {
          bucket
          region
          key
        }
        thumb
      }
      totalScore
      votes {
        items {
          id
          postID
          owner
          upvote
        }
        nextToken
      }
      monthlyViews
      totalViews
      tags {
        items {
          postID
          tagName
        }
        nextToken
      }
    }
  }
`;
export const downvotePost = /* GraphQL */ `
  mutation DownvotePost($id: ID!) {
    downvotePost(id: $id) {
      id
      title
      description
      createdAt
      userID
      thumb
      resolutions {
        resMode
        image {
          bucket
          region
          key
        }
        thumb
      }
      totalScore
      votes {
        items {
          id
          postID
          owner
          upvote
        }
        nextToken
      }
      monthlyViews
      totalViews
      tags {
        items {
          postID
          tagName
        }
        nextToken
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
      id
      username
      location
      description
      website
      monthlyViews
      owner
      posts {
        items {
          id
          title
          description
          createdAt
          userID
          thumb
          totalScore
          monthlyViews
          totalViews
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      location
      description
      website
      monthlyViews
      owner
      posts {
        items {
          id
          title
          description
          createdAt
          userID
          thumb
          totalScore
          monthlyViews
          totalViews
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
      id
      username
      location
      description
      website
      monthlyViews
      owner
      posts {
        items {
          id
          title
          description
          createdAt
          userID
          thumb
          totalScore
          monthlyViews
          totalViews
        }
        nextToken
      }
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
    }
  }
`;
export const createTaggedPost = /* GraphQL */ `
  mutation CreateTaggedPost(
    $input: CreateTaggedPostInput!
    $condition: ModelTaggedPostConditionInput
  ) {
    createTaggedPost(input: $input, condition: $condition) {
      postID
      tagName
      post {
        id
        title
        description
        createdAt
        userID
        thumb
        resolutions {
          resMode
          thumb
        }
        totalScore
        votes {
          nextToken
        }
        monthlyViews
        totalViews
        tags {
          nextToken
        }
      }
      tag {
        name
        description
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
      postID
      tagName
      post {
        id
        title
        description
        createdAt
        userID
        thumb
        resolutions {
          resMode
          thumb
        }
        totalScore
        votes {
          nextToken
        }
        monthlyViews
        totalViews
        tags {
          nextToken
        }
      }
      tag {
        name
        description
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
      postID
      tagName
      post {
        id
        title
        description
        createdAt
        userID
        thumb
        resolutions {
          resMode
          thumb
        }
        totalScore
        votes {
          nextToken
        }
        monthlyViews
        totalViews
        tags {
          nextToken
        }
      }
      tag {
        name
        description
        posts {
          nextToken
        }
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
      posts {
        items {
          postID
          tagName
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
      posts {
        items {
          postID
          tagName
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
      posts {
        items {
          postID
          tagName
        }
        nextToken
      }
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
      createdAt
      userID
      thumb
      resolutions {
        resMode
        image {
          bucket
          region
          key
        }
        thumb
      }
      totalScore
      votes {
        items {
          id
          postID
          owner
          upvote
        }
        nextToken
      }
      monthlyViews
      totalViews
      tags {
        items {
          postID
          tagName
        }
        nextToken
      }
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
      createdAt
      userID
      thumb
      resolutions {
        resMode
        image {
          bucket
          region
          key
        }
        thumb
      }
      totalScore
      votes {
        items {
          id
          postID
          owner
          upvote
        }
        nextToken
      }
      monthlyViews
      totalViews
      tags {
        items {
          postID
          tagName
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
      createdAt
      userID
      thumb
      resolutions {
        resMode
        image {
          bucket
          region
          key
        }
        thumb
      }
      totalScore
      votes {
        items {
          id
          postID
          owner
          upvote
        }
        nextToken
      }
      monthlyViews
      totalViews
      tags {
        items {
          postID
          tagName
        }
        nextToken
      }
    }
  }
`;
