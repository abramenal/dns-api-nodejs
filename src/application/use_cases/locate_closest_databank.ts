import makeDrone from '../../domain/drone';

const LOCATION_PRECISION = 2;

export default function locateClosestDatabank(
  x: string,
  y: string,
  z: string,
  velocity: string,
  sectorId: number,
): string {
  const drone = makeDrone({ x, y, z }, velocity);

  const closestDatabankLocation =
    sectorId * (drone.getPosition().getX() + drone.getPosition().getY() + drone.getPosition().getZ()) +
    drone.getVelocity();

  return closestDatabankLocation.toFixed(LOCATION_PRECISION);
}
