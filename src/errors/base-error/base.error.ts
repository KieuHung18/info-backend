class BaseError extends Error {
  statusCode: number;
  constructor(name: string, message: string, statusCode: number) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

export default BaseError;
