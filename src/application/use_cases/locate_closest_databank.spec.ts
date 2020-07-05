import locateClosestDatabank from './locate_closest_databank';

jest.mock('../../domain/drone', () => (position: Record<string, number>, velocity: number) => ({
  getPosition: () => ({
    getX: () => Number(position.x),
    getY: () => Number(position.y),
    getZ: () => Number(position.z),
  }),
  getVelocity: () => Number(velocity),
}));

describe('LocateClosestDatabank', () => {
  it('should return closest databank location', () => {
    const [x, y, z, velocity] = ['123.12', '456.56', '789.89', '20.0'];
    const sectorId = 1;
    const result = locateClosestDatabank(x, y, z, velocity, sectorId);

    expect(result).toEqual('1389.57');
  });
});
