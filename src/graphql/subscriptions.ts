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
      updatedAt
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
        totalScore
        updatedAt
        totalViews
        tags {
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
        totalScore
        updatedAt
        totalViews
        tags {
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
        totalScore
        updatedAt
        totalViews
        tags {
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
