import fastify from 'fastify';

import { PORT } from '../config';

import logger from '../logger';

const app = fastify({});

const start = async (): Promise<void> => {
  try {
    await app.listen(PORT);
    logger.info(`server listening on ${PORT}`);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

export default start;
