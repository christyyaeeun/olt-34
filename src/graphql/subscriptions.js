/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      username
      profilePic
      posts {
        items {
          id
          name
          content
          image
          postDate
          userID
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      pair {
        id
        pairedUsers {
          nextToken
          startedAt
        }
        timelineID
        timeline {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      pairID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      username
      profilePic
      posts {
        items {
          id
          name
          content
          image
          postDate
          userID
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      pair {
        id
        pairedUsers {
          nextToken
          startedAt
        }
        timelineID
        timeline {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      pairID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      username
      profilePic
      posts {
        items {
          id
          name
          content
          image
          postDate
          userID
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      pair {
        id
        pairedUsers {
          nextToken
          startedAt
        }
        timelineID
        timeline {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      pairID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      id
      name
      content
      image
      postDate
      user {
        id
        username
        profilePic
        posts {
          nextToken
          startedAt
        }
        pair {
          id
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        pairID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      userID
      timeline {
        id
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      timelineID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
      id
      name
      content
      image
      postDate
      user {
        id
        username
        profilePic
        posts {
          nextToken
          startedAt
        }
        pair {
          id
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        pairID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      userID
      timeline {
        id
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      timelineID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      id
      name
      content
      image
      postDate
      user {
        id
        username
        profilePic
        posts {
          nextToken
          startedAt
        }
        pair {
          id
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        pairID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      userID
      timeline {
        id
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      timelineID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreatePair = /* GraphQL */ `
  subscription OnCreatePair($owner: String) {
    onCreatePair(owner: $owner) {
      id
      pairedUsers {
        items {
          id
          username
          profilePic
          pairID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      timelineID
      timeline {
        id
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdatePair = /* GraphQL */ `
  subscription OnUpdatePair($owner: String) {
    onUpdatePair(owner: $owner) {
      id
      pairedUsers {
        items {
          id
          username
          profilePic
          pairID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      timelineID
      timeline {
        id
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeletePair = /* GraphQL */ `
  subscription OnDeletePair($owner: String) {
    onDeletePair(owner: $owner) {
      id
      pairedUsers {
        items {
          id
          username
          profilePic
          pairID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      timelineID
      timeline {
        id
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateTimeline = /* GraphQL */ `
  subscription OnCreateTimeline($owner: String) {
    onCreateTimeline(owner: $owner) {
      id
      posts {
        items {
          id
          name
          content
          image
          postDate
          userID
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateTimeline = /* GraphQL */ `
  subscription OnUpdateTimeline($owner: String) {
    onUpdateTimeline(owner: $owner) {
      id
      posts {
        items {
          id
          name
          content
          image
          postDate
          userID
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteTimeline = /* GraphQL */ `
  subscription OnDeleteTimeline($owner: String) {
    onDeleteTimeline(owner: $owner) {
      id
      posts {
        items {
          id
          name
          content
          image
          postDate
          userID
          timelineID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
