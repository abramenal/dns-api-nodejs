import { RouteOptions } from 'fastify';

import Location from '../controllers/location';

const location: RouteOptions = {
  method: 'POST',
  url: '/location/databank',
  handler: Location.postLocateDatabank,
  schema: {
    body: {
      type: 'object',
      required: ['x', 'y', 'z', 'vel'],
      properties: {
        x: { type: 'string' },
        y: { type: 'string' },
        z: { type: 'string' },
        vel: { type: 'string' },
      },
    },
  },
};

export default location;
