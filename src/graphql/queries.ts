/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: ID!) {
    getUser(username: $username) {
      username
      location
      description
      website
      monthlyViews
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $username: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      username: $username
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        location
        description
        website
        monthlyViews
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: SearchableUserSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchUsers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        username
        location
        description
        website
        monthlyViews
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
      id
      postID
      owner
      upvote
      createdAt
      updatedAt
    }
  }
`;
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        owner
        upvote
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const voteByPostByOwner = /* GraphQL */ `
  query VoteByPostByOwner(
    $postID: ID
    $owner: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    voteByPostByOwner(
      postID: $postID
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        owner
        upvote
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        updatedAt
        monthlyViews
        totalViews
        tags {
          nextToken
        }
      }
      nextToken
      total
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      updatedAt
      monthlyViews
      totalViews
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
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        updatedAt
        monthlyViews
        totalViews
        tags {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getTaggedPost = /* GraphQL */ `
  query GetTaggedPost($id: ID!) {
    getTaggedPost(id: $id) {
      id
      postID
      tagName
      createdAt
      updatedAt
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
        updatedAt
        monthlyViews
        totalViews
        tags {
          nextToken
        }
      }
      tag {
        name
        description
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const listTaggedPosts = /* GraphQL */ `
  query ListTaggedPosts(
    $filter: ModelTaggedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaggedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        tagName
        createdAt
        updatedAt
        post {
          id
          title
          description
          createdAt
          userID
          thumb
          totalScore
          updatedAt
          monthlyViews
          totalViews
        }
        tag {
          name
          description
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $name: ID
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTags(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        description
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($name: ID!) {
    getTag(name: $name) {
      name
      description
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
