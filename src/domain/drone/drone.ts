import { Drone, Position } from '../../types/domain';

export default function buildMakeDrone({
  makePosition,
}: {
  makePosition: (x: string, y: string, z: string) => Position;
}) {
  return function makeDrone(position: { [key: string]: string }, velocity: string): Drone {
    const validPosition = makePosition(position.x, position.y, position.z);

    const parsedVelocity = Number(velocity);
    if (!velocity || Number.isNaN(parsedVelocity) || parsedVelocity <= 0) {
      throw new Error('Velocity must be a positive number');
    }

    return Object.freeze({
      getPosition: () => validPosition,
      getVelocity: () => parsedVelocity,
    });
  };
}
