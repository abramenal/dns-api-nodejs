import { RouteOptions } from 'fastify';

import Health from '../controllers/health';

const health: RouteOptions = {
  method: 'GET',
  url: '/health',
  handler: Health.get,
};

export default health;
