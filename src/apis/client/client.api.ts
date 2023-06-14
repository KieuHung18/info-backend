import express from "express";
import User from "./user.api";
import Artwork from "./artwork.api";
import Project from "./project.api";

const Client = express.Router();
Client.use("/users", User);
Client.use("/artworks", Artwork);
Client.use("/projects", Project);
export default Client;
