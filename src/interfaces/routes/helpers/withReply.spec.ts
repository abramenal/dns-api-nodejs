import withReply from './withReply';

import { Instance, Request, Reply, RequestProcessor } from '../../../types/infrastructure';

function createMockReply() {
  const codeSpy = jest.fn();
  const headerSpy = jest.fn();
  const sendSpy = jest.fn();

  const ctx = {
    code: (code: number) => {
      codeSpy(code);
      return ctx;
    },
    header: (name: string, value: string) => {
      headerSpy(name, value);
      return ctx;
    },
    send: (result: Record<string, unknown>) => {
      sendSpy(result);
      return ctx;
    },
    codeSpy,
    headerSpy,
    sendSpy,
  };

  return ctx;
}

describe('withReply', () => {
  const processRequest = jest.fn();

  const request = <Request>(<unknown>{});
  const reply = <Reply>(<unknown>createMockReply());
  const context = <Instance>(<unknown>{});

  it('should reply with success message', async () => {
    const expectedResult = { result: true };
    processRequest.mockImplementation(async () => expectedResult);
    const handler = withReply(<RequestProcessor>(<unknown>processRequest)).bind(context);
    await handler(request, reply);

    const replySpy = <Record<string, unknown>>(<unknown>reply);

    expect(replySpy.codeSpy).toBeCalledWith(200);
    expect(replySpy.headerSpy).toBeCalledWith('Content-Type', 'application/json; charset=utf-8');
    expect(replySpy.sendSpy).toBeCalledWith(expectedResult);
  });

  it('should reply with error message', async () => {
    const expectedResult = { statusCode: 400, error: 'Bad Request', message: 'Some error' };
    processRequest.mockImplementation(async () => {
      throw new Error(expectedResult.message);
    });

    const handler = withReply(<RequestProcessor>(<unknown>processRequest)).bind(context);
    await handler(request, reply);

    const replySpy = <Record<string, unknown>>(<unknown>reply);

    expect(replySpy.codeSpy).toBeCalledWith(400);
    expect(replySpy.headerSpy).toBeCalledWith('Content-Type', 'application/json; charset=utf-8');
    expect(replySpy.sendSpy).toBeCalledWith(expectedResult);
  });
});
