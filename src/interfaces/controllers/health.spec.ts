import Health from './health';

describe('Health', () => {
  describe('#status', () => {
    it('should return OK status', async () => {
      const res = await Health.status();
      expect(res).toEqual('OK');
    });
  });
});
