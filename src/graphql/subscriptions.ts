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
          owner
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
          owner
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
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
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
      dailyViews
      monthlyViews
      totalViews
      votes {
        owner
        upvote
      }
      totalScore
      owner
      tags {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
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
      dailyViews
      monthlyViews
      totalViews
      votes {
        owner
        upvote
      }
      totalScore
      owner
      tags {
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
export const onCreateTaggedPost = /* GraphQL */ `
  subscription OnCreateTaggedPost {
    onCreateTaggedPost {
      id
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
        dailyViews
        monthlyViews
        totalViews
        votes {
          owner
          upvote
        }
        totalScore
        owner
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
      id
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
        dailyViews
        monthlyViews
        totalViews
        votes {
          owner
          upvote
        }
        totalScore
        owner
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
      id
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
        dailyViews
        monthlyViews
        totalViews
        votes {
          owner
          upvote
        }
        totalScore
        owner
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
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
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
      dailyViews
      monthlyViews
      totalViews
      votes {
        owner
        upvote
      }
      totalScore
      owner
      tags {
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
