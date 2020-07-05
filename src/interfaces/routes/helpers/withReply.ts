import { RequestProcessor, RequestHandler } from '../../../types/infrastructure';

export default function withReply(handler: RequestProcessor): RequestHandler {
  return async function (request, reply) {
    try {
      const result = await handler(request, reply);

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
