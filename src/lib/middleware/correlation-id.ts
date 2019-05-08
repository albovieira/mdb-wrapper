import { v4 as uuid } from 'uuid';
import { RequestHandler } from 'express';

/**
 * Atribui um Correlation ID para a requisição.
 */
export default function (): RequestHandler {
  return (req, res, next) => {
    if (req.method !== 'OPTIONS') {
      req.correlationId = req.header('X-Correlation-ID') || uuid();

      res.header('X-Correlation-ID', req.correlationId);
    }

    next();
  };
}
