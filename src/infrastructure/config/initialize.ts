import dotenv from 'dotenv';

const { NODE_ENV } = process.env;

if (NODE_ENV === 'development') {
  const env = dotenv.config();

  if (env.error) {
    throw env.error;
  }
}
