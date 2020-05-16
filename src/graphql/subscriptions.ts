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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($userID: String!) {
    onCreatePost(userID: $userID) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($userID: String!) {
    onDeletePost(userID: $userID) {
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
export const onCreateTaggedPost = /* GraphQL */ `
  subscription OnCreateTaggedPost {
    onCreateTaggedPost {
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
export const onUpdateTaggedPost = /* GraphQL */ `
  subscription OnUpdateTaggedPost {
    onUpdateTaggedPost {
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
export const onDeleteTaggedPost = /* GraphQL */ `
  subscription OnDeleteTaggedPost {
    onDeleteTaggedPost {
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
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($userID: String!) {
    onUpdatePost(userID: $userID) {
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
