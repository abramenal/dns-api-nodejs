import { Infrastructure } from '../../types';

const APP_SECTOR_ID = parseInt(process.env.APP_SECTOR_ID || '', 10);
const PORT = parseInt(process.env.PORT || '', 10);

export { APP_SECTOR_ID, PORT };

export default function createContext(): Infrastructure.Context {
  return Object.freeze({
    APP_SECTOR_ID,
    PORT,
  });
}
