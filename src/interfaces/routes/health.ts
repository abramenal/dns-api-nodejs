import withReply from './helpers/withReply';
import Health from '../controllers/health';
import { Context, RouteOptions } from '../../types/infrastructure';

export default function buildLocation(context: Context): RouteOptions {
  const health: RouteOptions = {
    method: 'GET',
    url: '/health',
    handler: withReply(async () => {
      const {
        variables: { APP_SECTOR_ID: id },
      } = context;

      const status = await Health.status(context);

      return { id, status };
    }),
  };

  return health;
}
