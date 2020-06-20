/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($owner: String!) {
    onCreateVote(owner: $owner) {
      id
      postID
      owner
      upvote
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($owner: String!) {
    onUpdateVote(owner: $owner) {
      id
      postID
      owner
      upvote
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($owner: String!) {
    onDeleteVote(owner: $owner) {
      id
      postID
      owner
      upvote
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($userID: String!) {
    onCreatePost(userID: $userID) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($userID: String!) {
    onUpdatePost(userID: $userID) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($userID: String!) {
    onDeletePost(userID: $userID) {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateCuration = /* GraphQL */ `
  subscription OnCreateCuration($owner: String!) {
    onCreateCuration(owner: $owner) {
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
export const onUpdateCuration = /* GraphQL */ `
  subscription OnUpdateCuration($owner: String!) {
    onUpdateCuration(owner: $owner) {
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
export const onDeleteCuration = /* GraphQL */ `
  subscription OnDeleteCuration($owner: String!) {
    onDeleteCuration(owner: $owner) {
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
export const onCreateTaggedPost = /* GraphQL */ `
  subscription OnCreateTaggedPost {
    onCreateTaggedPost {
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
export const onUpdateTaggedPost = /* GraphQL */ `
  subscription OnUpdateTaggedPost {
    onUpdateTaggedPost {
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
export const onDeleteTaggedPost = /* GraphQL */ `
  subscription OnDeleteTaggedPost {
    onDeleteTaggedPost {
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
export const onCreateTaggedCuration = /* GraphQL */ `
  subscription OnCreateTaggedCuration {
    onCreateTaggedCuration {
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
export const onUpdateTaggedCuration = /* GraphQL */ `
  subscription OnUpdateTaggedCuration {
    onUpdateTaggedCuration {
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
export const onDeleteTaggedCuration = /* GraphQL */ `
  subscription OnDeleteTaggedCuration {
    onDeleteTaggedCuration {
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
export const onCreateCuratedPost = /* GraphQL */ `
  subscription OnCreateCuratedPost {
    onCreateCuratedPost {
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
export const onUpdateCuratedPost = /* GraphQL */ `
  subscription OnUpdateCuratedPost {
    onUpdateCuratedPost {
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
export const onDeleteCuratedPost = /* GraphQL */ `
  subscription OnDeleteCuratedPost {
    onDeleteCuratedPost {
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
