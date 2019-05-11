import { IncomingMessage, ServerResponse } from 'http';

export = function nosniff () {
  return function nosniff (_req: IncomingMessage, res: ServerResponse, next: () => void) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
  };
};
