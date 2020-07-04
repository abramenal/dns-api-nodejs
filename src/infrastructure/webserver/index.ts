import fastify from 'fastify';

import { PORT } from '../config';

import health from '../../interfaces/routes/health';
import location from '../../interfaces/routes/location';

const app = fastify({});

app.route(health);
app.route(location);

const start = async (): Promise<number> => {
  await app.listen({ port: PORT });

  return PORT;
};

export default start;
