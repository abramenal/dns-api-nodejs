import locateClosestDatabank from '../../application/use_cases/locate_closest_databank';
import { Context } from '../../types/infrastructure';

export default {
  locateClosestDatabank: (input: { x: string; y: string; z: string; velocity: string }, context: Context): string => {
    const { x, y, z, velocity } = input;
    const sectorId = context.variables.APP_SECTOR_ID;

    context.logger.info(`Location: looking for closest databank location in ${sectorId} sector`);

    const location = locateClosestDatabank(x, y, z, velocity, sectorId);

    return location;
  },
};
