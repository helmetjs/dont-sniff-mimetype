import connect from 'connect';
import request from 'supertest';
import { IncomingMessage, ServerResponse } from 'http';

import nosniff = require('..')

describe('nosniff', () => {
  it('sets header properly', () => {
    const app = connect();
    app.use(nosniff());
    app.use((_req: IncomingMessage, res: ServerResponse)=> {
      res.end('Hello world!');
    });

    return request(app).get('/')
      .expect('X-Content-Type-Options', 'nosniff');
  });

  it('names its function and middleware', () => {
    expect(nosniff.name).toBe('nosniff');
    expect(nosniff().name).toBe('nosniff');
  });
});
