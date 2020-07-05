import { FastifyInstance, FastifyReply, FastifyRequest, RequestHandler, RouteOptions } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { Logger } from 'pino';

export type Variables = {
  APP_SECTOR_ID: number;
  PORT: number;
};

export type Context = {
  variables: Variables;
  logger: Logger;
};

export type Request = FastifyRequest<IncomingMessage>;
export type Reply = FastifyReply<ServerResponse>;
export type Instance = FastifyInstance;

export type RequestProcessor = (request: Request, reply: Reply) => Promise<Record<string, unknown>>;

export { Logger, RouteOptions, RequestHandler };
