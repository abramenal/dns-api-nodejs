import withReply from './helpers/withReply';
import Health from '../controllers/health';
import { Infrastructure } from '../../types';

export default function buildLocation(context: Infrastructure.Context): Infrastructure.RouteConfig {
  const health: Infrastructure.RouteConfig = {
    method: 'GET',
    url: '/health',
    handler: withReply(async () => {
      const id = context.APP_SECTOR_ID;
      const status = await Health.status();

      return { id, status };
    }),
  };

  return health;
}
