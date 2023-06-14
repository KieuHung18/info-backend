import httpStatusCodes from "./httpStatusCode";
import BaseError from "./base.error";
class ConflictError extends BaseError {
  constructor(name: string, message: string) {
    super(name, message, httpStatusCodes.CONFLICT);
  }
}
export default ConflictError;
