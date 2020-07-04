import { Domain } from '../../types';

export default function buildMakeDrone({
  makePosition,
}: {
  makePosition: (x: string, y: string, z: string) => Domain.Position;
}) {
  return function makeDrone(position: { [key: string]: string }, velocity: string): Domain.Drone {
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
