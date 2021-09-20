import * as Convict from 'convict';
import { config } from 'dotenv';
config();

export interface TConfigSchema {
  PORT: number;
}

export const Schema: Convict.Schema<TConfigSchema> = {
  PORT: {
    doc: 'The port to bind.',
    format: 'port',
    default: process.env.PORT,
    env: 'PORT',
    arg: 'port',
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  MONGO_URL: {
    doc: 'Mongodb URL',
    default: process.env.MONGO_URL,
  },
};
