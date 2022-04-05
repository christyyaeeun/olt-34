/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        content
        image
        postDate
        user {
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
        userID
        timeline {
          id
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        content
        image
        postDate
        user {
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
        userID
        timeline {
          id
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
      nextToken
      startedAt
    }
  }
`;
export const getPair = /* GraphQL */ `
  query GetPair($id: ID!) {
    getPair(id: $id) {
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
export const listPairs = /* GraphQL */ `
  query ListPairs(
    $filter: ModelPairFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPairs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPairs = /* GraphQL */ `
  query SyncPairs(
    $filter: ModelPairFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPairs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getTimeline = /* GraphQL */ `
  query GetTimeline($id: ID!) {
    getTimeline(id: $id) {
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
export const listTimelines = /* GraphQL */ `
  query ListTimelines(
    $filter: ModelTimelineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimelines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTimelines = /* GraphQL */ `
  query SyncTimelines(
    $filter: ModelTimelineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTimelines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
