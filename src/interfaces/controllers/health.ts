import { Context } from '../../types/infrastructure';

export default {
  status: async (context: Context): Promise<string> => {
    context.logger.info(`Health: checking app status`);

    return 'OK';
  },
};
