import NotFoundError from "./base-error/not-found.error";
class UserNotFoundError extends NotFoundError {
  constructor() {
    const name = "UserNotFoundError";
    const message = "User not found";
    super(name, message);
  }
}
export default UserNotFoundError;
