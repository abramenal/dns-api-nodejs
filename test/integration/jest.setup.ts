jest.mock('../../src/infrastructure/logger', () => console);
jest.mock('../../src/infrastructure/config', () => ({
  PORT: 1234,
  APP_SECTOR_ID: 1,
}));
