import httpStatusCodes from "./httpStatusCode";
import BaseError from "./base.error";
class InternalServer extends BaseError {
  constructor(name: string, message: string) {
    super(name, message, httpStatusCodes.INTERNAL_SERVER);
  }
}
export default InternalServer;
