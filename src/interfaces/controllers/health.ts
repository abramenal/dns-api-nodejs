import { FastifyRequest, FastifyReply } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';

export default {
  get: (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>): void => {
    reply.send({ status: 'OK' });
  },
};
