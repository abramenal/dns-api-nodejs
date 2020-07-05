import { Position } from '../../types/domain';

export default function buildMakePosition() {
  return function makePosition(x: string, y: string, z: string): Position {
    const parsedX = Number(x);
    if (!x || Number.isNaN(parsedX) || parsedX <= 0) {
      throw new Error('X must be a positive number');
    }

    const parsedY = Number(y);
    if (!y || Number.isNaN(parsedY) || parsedY <= 0) {
      throw new Error('Y must be a positive number');
    }

    const parsedZ = Number(z);
    if (!z || Number.isNaN(parsedZ) || parsedZ <= 0) {
      throw new Error('Z must be a positive number');
    }

    return Object.freeze({
      getX: () => parsedX,
      getY: () => parsedY,
      getZ: () => parsedZ,
    });
  };
}
