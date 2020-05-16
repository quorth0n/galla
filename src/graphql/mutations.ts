/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          dailyViews
          monthlyViews
          totalViews
          totalScore
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
          dailyViews
          monthlyViews
          totalViews
          totalScore
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
          dailyViews
          monthlyViews
          totalViews
          totalScore
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
      tags {
        items {
          id
          postID
          tagName
        }
        nextToken
      }
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
      dailyViews
      monthlyViews
      totalViews
      votes {
        owner
        upvote
      }
      totalScore
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
      tags {
        items {
          id
          postID
          tagName
        }
        nextToken
      }
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
      dailyViews
      monthlyViews
      totalViews
      votes {
        owner
        upvote
      }
      totalScore
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
      tag {
        name
        description
        posts {
          nextToken
        }
      }
      post {
        id
        title
        description
        createdAt
        userID
        tags {
          nextToken
        }
        thumb
        resolutions {
          resMode
          thumb
        }
        dailyViews
        monthlyViews
        totalViews
        votes {
          owner
          upvote
        }
        totalScore
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
      tag {
        name
        description
        posts {
          nextToken
        }
      }
      post {
        id
        title
        description
        createdAt
        userID
        tags {
          nextToken
        }
        thumb
        resolutions {
          resMode
          thumb
        }
        dailyViews
        monthlyViews
        totalViews
        votes {
          owner
          upvote
        }
        totalScore
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
      tag {
        name
        description
        posts {
          nextToken
        }
      }
      post {
        id
        title
        description
        createdAt
        userID
        tags {
          nextToken
        }
        thumb
        resolutions {
          resMode
          thumb
        }
        dailyViews
        monthlyViews
        totalViews
        votes {
          owner
          upvote
        }
        totalScore
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
          id
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
          id
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
          id
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
      tags {
        items {
          id
          postID
          tagName
        }
        nextToken
      }
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
      dailyViews
      monthlyViews
      totalViews
      votes {
        owner
        upvote
      }
      totalScore
    }
  }
`;
