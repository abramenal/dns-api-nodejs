import { Context } from '../../types/infrastructure';

import variables from '../config';
import logger from '../logger';

export default function createContext(): Context {
  return Object.freeze({
    variables,
    logger,
  });
}
