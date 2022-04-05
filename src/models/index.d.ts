import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimelineMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PairMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly profilePic?: string | null;
  readonly posts?: (Post | null)[] | null;
  readonly pair: Pair;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly name?: string | null;
  readonly content?: string | null;
  readonly image?: string | null;
  readonly postDate?: string | null;
  readonly user: User;
  readonly timeline: Timeline;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Timeline {
  readonly id: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Timeline, TimelineMetaData>);
  static copyOf(source: Timeline, mutator: (draft: MutableModel<Timeline, TimelineMetaData>) => MutableModel<Timeline, TimelineMetaData> | void): Timeline;
}

export declare class Pair {
  readonly id: string;
  readonly pairedUsers?: (User | null)[] | null;
  readonly timelineID?: string | null;
  readonly timeline?: Timeline | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Pair, PairMetaData>);
  static copyOf(source: Pair, mutator: (draft: MutableModel<Pair, PairMetaData>) => MutableModel<Pair, PairMetaData> | void): Pair;
}