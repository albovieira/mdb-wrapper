import { ValidationError, DatabaseError, NotFoundError } from '../util/errors';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { Logger } from 'winston';
import { HttpStatus } from '../util/http-status';

class ErrorResponse {
  constructor(private type: string, private message: string, private details?: any) { }
}

/**
 * Middleware de tratamento de erros para retornar o erro em formato json.
 */
export default function (logger: Logger): ErrorRequestHandler {
  return (error: any, req: Request, res: Response, next: NextFunction) => {
    let err = error;
    const metadata = req.getRequestMetadata && req.getRequestMetadata();

    if (res.headersSent) {
      logger.error(err.message, metadata);
      return next(err);
    }

    if (err.name && err.name === 'MongoError') {
      logger.error(err.message, metadata);
      err = new DatabaseError(null, 'Database internal error');
    }

    const response = new ErrorResponse(err.name, err.message, err.details);

    if (err instanceof ValidationError) {
      logger.info(err.message, metadata);
      res.status(HttpStatus.UNPROCESSABLE_ENTITY);
    } else if (err instanceof NotFoundError) {
      logger.info(err.message, metadata);
      res.status(HttpStatus.NOT_FOUND);
    } else {
      logger.error(err.message, metadata);
      res.status(HttpStatus.INTERNAL_ERROR);
    }

    return res.json(response);
  };
}
