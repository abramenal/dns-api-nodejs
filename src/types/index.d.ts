import { FastifyRequest, FastifyReply, RouteOptions } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';

export namespace Infrastructure {
  export type Context = {
    APP_SECTOR_ID: number;
    PORT: number;
  };

  export type Request = FastifyRequest<IncomingMessage>;
  export type Reply = FastifyReply<ServerResponse>;
  export type RouteConfig = RouteOptions;
}

export namespace Domain {
  export type Drone = {
    getPosition: () => Position;
    getVelocity: () => number;
  };

  export type Position = {
    getX: () => number;
    getY: () => number;
    getZ: () => number;
  };
}
