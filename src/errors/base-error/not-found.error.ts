import httpStatusCodes from "./httpStatusCode";
import BaseError from "./base.error";
class NotFoundError extends BaseError {
  constructor(name: string, message: string) {
    super(name, message, httpStatusCodes.NOT_FOUND);
  }
}
export default NotFoundError;
