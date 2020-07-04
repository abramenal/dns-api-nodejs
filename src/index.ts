import './infrastructure/config/initialize';
import startServer from './infrastructure/webserver';
import logger from './infrastructure/logger';

const init = async () => {
  try {
    const serverPort = await startServer();

    logger.info(`dns-api-nodejs: listening on ${serverPort} port`);
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
};

init();
