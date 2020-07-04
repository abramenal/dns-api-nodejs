import pino from 'pino';

const logger = pino({ nestedKey: 'payload' });

export default logger;
