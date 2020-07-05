export type Drone = {
  getPosition: () => Position;
  getVelocity: () => number;
};

export type Position = {
  getX: () => number;
  getY: () => number;
  getZ: () => number;
};
