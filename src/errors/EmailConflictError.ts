import ConflictError from "./base-error/conflict.error";
class EmailConflictError extends ConflictError {
  constructor() {
    const name = "EmailConflict";
    const message = "Email already exists";
    super(name, message);
  }
}
export default EmailConflictError;
