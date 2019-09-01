import { IncomingMessage, ServerResponse } from 'http';

export = function dontSniffMimetype () {
  return function dontSniffMimetype (_req: IncomingMessage, res: ServerResponse, next: () => void) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  };
};
