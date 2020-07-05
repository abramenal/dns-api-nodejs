import { app } from '../../../src/infrastructure/webserver';

describe('location', () => {
  afterAll(() => app.close());

  it('POST /location/databank', async (done) => {
    app.inject(
      {
        method: 'POST',
        url: '/location/databank',
        payload: {
          x: '123.12',
          y: '456.56',
          z: '789.89',
          vel: '20.0',
        },
      },
      (err, response) => {
        expect(err).toEqual(null);
        expect(response.statusCode).toEqual(200);
        expect(response.headers['content-type']).toEqual('application/json; charset=utf-8');
        expect(response.json()).toEqual({ loc: '1389.57' });
        done();
      },
    );
  });
});
