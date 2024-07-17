import express from "express";
import {
  UserSessionData,
  getSession,
} from "../../middlewares/session.middleware";
import UserService from "../../services/user.service";
import ProjectService from "../../services/project.service";

const Project = express.Router();
const userService = new UserService();
Project.post("/", async (req, res, next) => {
  try {
    const session: UserSessionData = await getSession(req);
    const user = await userService.retrieve(session.userId);
    const project = await user.createProject(req.body);
    res.json({ response: project });
  } catch (error) {
    next(error);
  }
});
Project.post("/:id", async (req, res, next) => {
  try {
    const session: UserSessionData = await getSession(req);
    const projectService = new ProjectService();
    const project = await projectService.retrieveProjectOfUser(
      req.params.id,
      session.userId
    );
    const newProject = await projectService.update(project, req.body);
    res.json({ response: newProject });
  } catch (error) {
    next(error);
  }
});
Project.get("/", async (req, res, next) => {
  try {
    const session: UserSessionData = await getSession(req);
    const user = await userService.retrieve(session.userId);
    const projects = await user.getProjects();
    res.json({ response: projects });
  } catch (error) {
    next(error);
  }
});
Project.get("/:id", async (req, res, next) => {
  try {
    const session: UserSessionData = await getSession(req);
    const projectService = new ProjectService();
    const project = await projectService.retrieveProjectOfUser(
      req.params.id,
      session.userId
    );
    res.json({ response: project });
  } catch (error) {
    next(error);
  }
});

Project.delete("/:id", async (req, res, next) => {
  try {
    const session: UserSessionData = await getSession(req);
    const projectService = new ProjectService();
    const project = await projectService.retrieveProjectOfUser(
      req.params.id,
      session.userId
    );
    project.destroy();
    res.json({ response: project });
  } catch (error) {
    next(error);
  }
});
export default Project;
