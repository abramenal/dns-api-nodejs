import { Variables } from '../../types/infrastructure';

const APP_SECTOR_ID = parseInt(process.env.APP_SECTOR_ID || '', 10);
const PORT = parseInt(process.env.PORT || '', 10);

const variables: Variables = { APP_SECTOR_ID, PORT };

export default variables;
