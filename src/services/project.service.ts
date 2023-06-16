import ProjectNotFoundError from "../errors/ProjectNotFoundError";
import ProjectPermissionError from "../errors/ProjectPermissionError";
import { Project, ProjectProps } from "../models/project.model";
import UserService from "./user.service";

class ProjectService {
  public async retrieve(id: string): Promise<ProjectProps> {
    const project = await Project.findByPk(id);
    if (project) {
      return project as ProjectProps;
    } else {
      throw new ProjectNotFoundError();
    }
  }
  public async retrieveProjectOfUser(
    projectId: string,
    userId: string
  ): Promise<ProjectProps> {
    const userService = new UserService();
    const user = await userService.retrieve(userId);
    const project = await this.retrieve(projectId);
    if (!project) {
      throw new ProjectNotFoundError();
    }
    if (!(await user.hasProject(project))) {
      throw new ProjectPermissionError();
    }

    return project;
  }
  public async delete(id: string): Promise<ProjectProps> {
    const project = await this.retrieve(id);
    await project.destroy();
    return project;
  }
  public async listPublish(): Promise<ProjectProps[]> {
    const projects = await Project.findAll({
      where: { publish: true },
      order: [["createdAt", "DESC"]],
    });
    return projects as ProjectProps[];
  }
  public async retrievePublish(id: string): Promise<ProjectProps> {
    const project = await Project.findOne({
      where: { id: id, publish: true },
      order: [["createdAt", "DESC"]],
    });
    if (project) {
      return project as ProjectProps;
    } else {
      throw new ProjectNotFoundError();
    }
  }
  public async update(project: ProjectProps, newProject: ProjectProps) {
    Object.assign(project, newProject);
    const result = await project.save();
    return result;
  }
}

export default ProjectService;
