import httpStatusCodes from "./httpStatusCode";
import BaseError from "./base.error";
class BadRequest extends BaseError {
  constructor(name: string, message: string) {
    super(name, message, httpStatusCodes.BAD_REQUEST);
  }
}
export default BadRequest;
