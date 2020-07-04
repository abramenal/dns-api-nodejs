import buildMakeDrone from './drone';
import makePosition from '../position';

const makeDrone = buildMakeDrone({ makePosition });

export default makeDrone;
