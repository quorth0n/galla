/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($username: ID!) {
    getUser(username: $username) {
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
        totalViews
        totalScore
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
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
      totalViews
      totalScore
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
        totalViews
        totalScore
        updatedAt
        tags {
          nextToken
        }
        curations {
          nextToken
        }
      }
      nextToken
      total
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
        totalViews
        totalScore
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
          totalViews
          totalScore
          updatedAt
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
      nextToken
    }
  }
`;
export const getTag = /* GraphQL */ `
  query GetTag($name: ID!) {
    getTag(name: $name) {
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
export const searchTags = /* GraphQL */ `
  query SearchTags(
    $filter: SearchableTagFilterInput
    $sort: SearchableTagSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTags(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const getCuratedPost = /* GraphQL */ `
  query GetCuratedPost($id: ID!) {
    getCuratedPost(id: $id) {
      id
      postID
      curationID
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
        totalViews
        totalScore
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
        name
        description
        updatedAt
        createdAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const listCuratedPosts = /* GraphQL */ `
  query ListCuratedPosts(
    $filter: ModelCuratedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCuratedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        curationID
        createdAt
        updatedAt
        post {
          id
          title
          description
          createdAt
          userID
          thumb
          totalViews
          totalScore
          updatedAt
        }
        curation {
          id
          owner
          name
          description
          updatedAt
          createdAt
        }
      }
      nextToken
    }
  }
`;
export const listCurations = /* GraphQL */ `
  query ListCurations(
    $filter: ModelCurationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCurations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        name
        description
        updatedAt
        createdAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCuration = /* GraphQL */ `
  query GetCuration($id: ID!) {
    getCuration(id: $id) {
      id
      owner
      name
      description
      updatedAt
      createdAt
      posts {
        items {
          id
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
export const searchCurations = /* GraphQL */ `
  query SearchCurations(
    $filter: SearchableCurationFilterInput
    $sort: SearchableCurationSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchCurations(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        owner
        name
        description
        updatedAt
        createdAt
        posts {
          nextToken
        }
      }
      nextToken
      total
    }
  }
`;
