import express from "express";
import ProjectService from "../../services/project.service";
const Project = express.Router();

Project.get("/", async (req, res, next) => {
  const projectService = new ProjectService();
  try {
    const projects = await projectService.listPublish();
    res.json({ response: projects });
  } catch (error) {
    next(error);
  }
});
Project.get("/:id", async (req, res, next) => {
  const projectService = new ProjectService();
  try {
    const project = await projectService.retrievePublish(req.params.id);
    res.json({ response: project });
  } catch (error) {
    next(error);
  }
});
export default Project;
