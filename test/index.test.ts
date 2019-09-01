import connect from 'connect';
import request from 'supertest';
import { IncomingMessage, ServerResponse } from 'http';

import dontSniffMimetype = require('..')

describe('dontSniffMimetype', () => {
  it('sets header properly', () => {
    const app = connect();
    app.use(dontSniffMimetype());
    app.use((_req: IncomingMessage, res: ServerResponse)=> {
      res.end('Hello world!');
    });

    return request(app).get('/')
      .expect('X-Content-Type-Options', 'nosniff');
  });

  it('names its function and middleware', () => {
    expect(dontSniffMimetype.name).toBe('dontSniffMimetype');
    expect(dontSniffMimetype().name).toBe('dontSniffMimetype');
  });
});
