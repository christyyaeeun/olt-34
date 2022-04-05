// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Post, Timeline, Pair } = initSchema(schema);

export {
  User,
  Post,
  Timeline,
  Pair
};