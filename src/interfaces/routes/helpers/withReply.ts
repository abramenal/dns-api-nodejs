import { Infrastructure } from '../../../types';

export default function withReply(handler: (request: Infrastructure.Request) => Promise<Record<string, unknown>>) {
  return async function (request: Infrastructure.Request, reply: Infrastructure.Reply): Promise<void> {
    try {
      const result = await handler(request);

      reply.code(200).header('Content-Type', 'application/json; charset=utf-8').send(result);
    } catch (e) {
      const statusCode = 400;

      reply.code(statusCode).header('Content-Type', 'application/json; charset=utf-8').send({
        statusCode,
        error: 'Bad Request',
        message: e.message,
      });
    }
  };
}
