import httpStatusCodes from "./httpStatusCode";
import BaseError from "./base.error";
class TimeoutError extends BaseError {
  constructor(name: string, message: string) {
    super(name, message, httpStatusCodes.TIMEOUT);
  }
}
export default TimeoutError;
