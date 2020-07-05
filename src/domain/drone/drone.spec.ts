import { Position } from '../../types/domain';
import buildMakeDrone from './drone';

describe('Drone', () => {
  beforeEach(() => jest.clearAllMocks());

  const mockPositionInput = { x: '4', y: '5', z: '6' };
  const mockPosition = <Position>(<unknown>{
    getX: () => mockPositionInput.x,
    getY: () => mockPositionInput.y,
    getZ: () => mockPositionInput.z,
  });

  const makePosition = jest.fn(() => mockPosition);
  const makeDrone = buildMakeDrone({ makePosition });

  const failTestCases = [
    {
      testCase: 'should throw if velocity is not defined',
      velocity: '',
    },
    {
      testCase: 'should throw if velocity cannot be parsed as Float',
      velocity: 'qwe',
    },
    {
      testCase: 'should throw if velocity is not a positive number',
      velocity: '-10.8',
    },
  ];

  failTestCases.forEach(({ testCase, velocity }) => {
    it(testCase, () => {
      const caseHandler = makeDrone.bind(null, mockPositionInput, velocity);
      expect(caseHandler).toThrow('Velocity must be a positive number');
    });
  });

  const successTestCases = [
    {
      testCase: 'should return readonly instance',
      velocity: '789.89',
    },
  ];

  successTestCases.forEach(({ testCase, velocity }) => {
    it(testCase, () => {
      const caseHandler = makeDrone.bind(null, mockPositionInput, velocity);
      const result = caseHandler();

      expect(result.getVelocity()).toEqual(parseFloat(velocity));

      expect(makePosition).toBeCalledTimes(1);
      expect(makePosition).toBeCalledWith(mockPositionInput.x, mockPositionInput.y, mockPositionInput.z);

      expect(result.getPosition()).toEqual(mockPosition);
    });
  });
});
