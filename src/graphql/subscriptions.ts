/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($owner: String!) {
    onCreateVote(owner: $owner) {
      id
      postID
      owner
      upvote
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
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onCreateTaggedPost = /* GraphQL */ `
  subscription OnCreateTaggedPost {
    onCreateTaggedPost {
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
export const onUpdateTaggedPost = /* GraphQL */ `
  subscription OnUpdateTaggedPost {
    onUpdateTaggedPost {
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
export const onDeleteTaggedPost = /* GraphQL */ `
  subscription OnDeleteTaggedPost {
    onDeleteTaggedPost {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
