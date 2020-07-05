import buildMakePosition from './position';

describe('Position', () => {
  const makePosition = buildMakePosition();

  const failTestCases = [
    {
      testCase: 'should throw if X is not defined',
      invalidParameter: 'X',
      args: ['', '1', '1'],
    },
    {
      testCase: 'should throw if X cannot be parsed as Float',
      invalidParameter: 'X',
      args: ['abc', '1', '1'],
    },
    {
      testCase: 'should throw if X is not a positive number',
      invalidParameter: 'X',
      args: ['0', '1', '1'],
    },

    {
      testCase: 'should throw if Y is not defined',
      invalidParameter: 'Y',
      args: ['2', '', '2'],
    },
    {
      testCase: 'should throw if Y cannot be parsed as Float',
      invalidParameter: 'Y',
      args: ['2', '%4', '2'],
    },
    {
      testCase: 'should throw if Y is not a positive number',
      invalidParameter: 'Y',
      args: ['2', '-3', '2'],
    },

    {
      testCase: 'should throw if Z is not defined',
      invalidParameter: 'Z',
      args: ['3', '3', ''],
    },
    {
      testCase: 'should throw if Z cannot be parsed as Float',
      invalidParameter: 'Z',
      args: ['3', '3', '$1'],
    },
    {
      testCase: 'should throw if Z is not a positive number',
      invalidParameter: 'Z',
      args: ['3', '3', '-1'],
    },
  ];

  failTestCases.forEach(({ testCase, invalidParameter, args }) => {
    it(testCase, () => {
      const caseHandler = makePosition.bind(null, ...args);
      expect(caseHandler).toThrow(`${invalidParameter} must be a positive number`);
    });
  });

  const successTestCases = [
    {
      testCase: 'should return readonly instance',
      args: ['123.12', '456.56', '789.89'],
    },
  ];

  successTestCases.forEach(({ testCase, args }) => {
    it(testCase, () => {
      const caseHandler = makePosition.bind(null, ...args);
      const result = caseHandler();

      expect(result.getX()).toEqual(parseFloat(args[0]));
      expect(result.getY()).toEqual(parseFloat(args[1]));
      expect(result.getZ()).toEqual(parseFloat(args[2]));
    });
  });
});
