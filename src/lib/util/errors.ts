import { WError } from 'verror';

export class ValidationError extends WError {
  constructor(name: string, message: string, ...params: any[]) {
    super({ name }, message, params);
  }
}

export class NotFoundError extends WError {
  constructor(message?: string) {
    super({ name: 'NotFoundError' }, message || 'NOT_FOUND');
  }
}
