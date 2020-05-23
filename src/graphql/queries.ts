/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        location
        description
        website
        monthlyViews
        owner
        posts {
          nextToken
        }
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
        id
        username
        location
        description
        website
        monthlyViews
        owner
        posts {
          nextToken
        }
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
        votes {
          nextToken
        }
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
        votes {
          nextToken
        }
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
export const listTaggedPosts = /* GraphQL */ `
  query ListTaggedPosts(
    $filter: ModelTaggedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaggedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        postID
        tagName
        post {
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
        tag {
          name
          description
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
