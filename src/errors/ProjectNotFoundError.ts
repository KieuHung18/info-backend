import NotFoundError from "./base-error/not-found.error";
class ProjectNotFoundError extends NotFoundError {
  constructor() {
    const name = "ProjectNotFoundError";
    const message = "Project not found";
    super(name, message);
  }
}
export default ProjectNotFoundError;
