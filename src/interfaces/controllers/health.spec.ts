import Health from './health';
import { createMockContext } from '../../../test/unit/test_utils';

describe('Health', () => {
  describe('#status', () => {
    it('should return OK status', async () => {
      const context = createMockContext();
      const res = await Health.status(context);
      expect(res).toEqual('OK');
    });
  });
});
