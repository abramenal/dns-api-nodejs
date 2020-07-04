import locateClosestDatabank from '../../application/use_cases/locate_closest_databank';
import { Infrastructure } from '../../types';

export default {
  postLocateDatabank: (
    input: { x: string; y: string; z: string; velocity: string },
    context: Infrastructure.Context,
  ): string => {
    const { x, y, z, velocity } = input;
    const sectorId = context.APP_SECTOR_ID;

    const location = locateClosestDatabank(x, y, z, velocity, sectorId);

    return location;
  },
};
