import fastify from 'fastify';

import createContext from '../context';

import buildHealth from '../../interfaces/routes/health';
import buildLocation from '../../interfaces/routes/location';

const app = fastify({});
const context = createContext();

const health = buildHealth(context);
const location = buildLocation(context);

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

const start = async (): Promise<number> => {
  await app.listen({ port: context.variables.PORT });

  return context.variables.PORT;
};

export default start;

export { app };
