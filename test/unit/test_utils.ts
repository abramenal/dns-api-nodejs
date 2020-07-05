import createContext from '../../src/infrastructure/context';
import { Context } from '../../src/types/infrastructure';

export function createMockContext(): Context {
  return createContext();
}
