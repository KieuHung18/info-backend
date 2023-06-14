import UnauthorizedError from "./base-error/unauthorized.error";
class UserUnauthorizedError extends UnauthorizedError {
  constructor() {
    const name = "UserUnauthorized";
    const message = "Authentication failed permisssion denied";
    super(name, message);
  }
}
export default UserUnauthorizedError;
