import pino from 'pino';

const logger = pino({ nestedKey: 'payload', base: null, prettyPrint: true });

export default logger;
