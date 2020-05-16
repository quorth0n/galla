/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTag = /* GraphQL */ `
  query GetTag($name: ID!) {
    getTag(name: $name) {
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
      nextToken
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
