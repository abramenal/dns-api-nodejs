import dotenv from 'dotenv';

const env = dotenv.config();

if (env.error) {
  throw env.error;
}
