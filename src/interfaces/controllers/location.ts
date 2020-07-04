import { FastifyRequest, FastifyReply } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';

export default {
  postLocateDatabank: (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>): void => {
    reply.send(new Error(`Not implemented | payload: ${JSON.stringify(request.body)}`));
  },
};
