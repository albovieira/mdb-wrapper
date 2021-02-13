import { RequestHandler, Request } from 'express';

const CHANNEL = 'search_intention';

export default function (): RequestHandler {
  return (req: Request, res, next) => {
    req.getRequestMetadata = () => ({
      referrer: req.correlationId,
      server: req.headers.host,
      http_method: req.method,
      ctxt_user: 0,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      channel: CHANNEL,
      url: req.originalUrl,
    });

    next();
  };
}
