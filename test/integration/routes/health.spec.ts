import { app } from '../../../src/infrastructure/webserver';

describe('health', () => {
  afterAll(() => app.close());

  it('GET /health', async (done) => {
    app.inject(
      {
        method: 'GET',
        url: '/health',
      },
      (err, response) => {
        expect(err).toEqual(null);
        expect(response.statusCode).toEqual(200);
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        expect(response.json()).toEqual({ id: 1, status: 'OK' });
        done();
      },
    );
  });
});
