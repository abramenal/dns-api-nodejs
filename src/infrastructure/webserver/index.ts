import fastify from 'fastify';
import helmet from 'fastify-helmet';

import createContext from '../context';

import buildHealth from '../../interfaces/routes/health';
import buildLocation from '../../interfaces/routes/location';

import { Instance, ServerOptions } from '../../types/infrastructure';

const context = createContext();

export const createApp = (opts?: ServerOptions): Instance => {
  const app = fastify(opts);

  const health = buildHealth(context);
  const location = buildLocation(context);

  app.register(helmet);
  app.route(health);
  app.route(location);

  process.on('unhandledRejection', (reason: string) => {
    context.logger.error(reason);
    process.exit(1);
  });

  process.on('uncaughtException', function (err) {
    context.logger.error(err);
    process.exit(1);
  });

  return app;
};

const start = async (): Promise<number> => {
  const app = createApp({ logger: true });
  await app.listen({ port: context.variables.PORT });

  return context.variables.PORT;
};

export default start;
