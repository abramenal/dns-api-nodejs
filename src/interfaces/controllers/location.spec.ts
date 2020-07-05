import Location from './location';
import { createMockContext } from '../../../test/unit/test_utils';

jest.mock('../../application/use_cases/locate_closest_databank', () => () => 'result');

describe('Location', () => {
  describe('#locateClosestDatabank', () => {
    it('should return use case result  value', async () => {
      const input = { x: '10', y: '15', z: '20', velocity: '30' };
      const context = createMockContext();
      const res = await Location.locateClosestDatabank(input, context);
      expect(res).toEqual('result');
    });
  });
});
