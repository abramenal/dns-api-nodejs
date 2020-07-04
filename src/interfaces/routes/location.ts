import withReply from './helpers/withReply';
import Location from '../controllers/location';
import { Infrastructure } from '../../types';

export default function buildLocation(context: Infrastructure.Context): Infrastructure.RouteConfig {
  const location: Infrastructure.RouteConfig = {
    method: 'POST',
    url: '/location/databank',
    handler: withReply(async (request: Infrastructure.Request) => {
      const { x, y, z, vel: velocity } = request.body;
      const databankLocation = await Location.postLocateDatabank({ x, y, z, velocity }, context);

      return { loc: databankLocation };
    }),
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

  return location;
}
