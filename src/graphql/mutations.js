/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPair = /* GraphQL */ `
  mutation CreatePair(
    $input: CreatePairInput!
    $condition: ModelPairConditionInput
  ) {
    createPair(input: $input, condition: $condition) {
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
export const updatePair = /* GraphQL */ `
  mutation UpdatePair(
    $input: UpdatePairInput!
    $condition: ModelPairConditionInput
  ) {
    updatePair(input: $input, condition: $condition) {
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
export const deletePair = /* GraphQL */ `
  mutation DeletePair(
    $input: DeletePairInput!
    $condition: ModelPairConditionInput
  ) {
    deletePair(input: $input, condition: $condition) {
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
export const createTimeline = /* GraphQL */ `
  mutation CreateTimeline(
    $input: CreateTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    createTimeline(input: $input, condition: $condition) {
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
export const updateTimeline = /* GraphQL */ `
  mutation UpdateTimeline(
    $input: UpdateTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    updateTimeline(input: $input, condition: $condition) {
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
export const deleteTimeline = /* GraphQL */ `
  mutation DeleteTimeline(
    $input: DeleteTimelineInput!
    $condition: ModelTimelineConditionInput
  ) {
    deleteTimeline(input: $input, condition: $condition) {
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
