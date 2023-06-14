import httpStatusCodes from "./httpStatusCode";
import BaseError from "./base.error";
class UnauthorizedError extends BaseError {
  constructor(name: string, message: string) {
    super(name, message, httpStatusCodes.UNAUTHORIZED);
  }
}
export default UnauthorizedError;
