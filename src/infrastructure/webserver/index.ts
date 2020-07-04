import fastify from 'fastify';

import createContext from '../config';

import buildHealth from '../../interfaces/routes/health';
import buildLocation from '../../interfaces/routes/location';

const app = fastify({});
const context = createContext();

const health = buildHealth(context);
const location = buildLocation(context);

app.route(health);
app.route(location);

const start = async (): Promise<number> => {
  await app.listen({ port: context.PORT });

  return context.PORT;
};

export default start;
