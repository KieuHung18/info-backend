import ForbiddenError from "./base-error/forbidden.error";
class ProjectPermissionError extends ForbiddenError {
  constructor() {
    const name = "ProjectPermissionError";
    const message = "User not have permission to this project";
    super(name, message);
  }
}
export default ProjectPermissionError;
