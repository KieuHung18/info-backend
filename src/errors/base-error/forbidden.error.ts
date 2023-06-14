import httpStatusCodes from "./httpStatusCode";
import BaseError from "./base.error";
class ForbiddenError extends BaseError {
  constructor(name: string, message: string) {
    super(name, message, httpStatusCodes.FORBIDDEN);
  }
}
export default ForbiddenError;
