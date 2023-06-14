import express from "express";
import Uploads from "./uploads.api";
import User from "./user.api";
import Artwork from "./artwork.api";
import Authentication from "./authentication.api";
import session from "../../middlewares/session.middleware";
import authUser from "../../middlewares/auth.middleware";
import Project from "./project.api";

const Admin = express.Router();

Admin.use(session);
Admin.use("/auth", Authentication);
Admin.use(authUser);
Admin.get("/", (req, res) => {
  res.json({ response: "Wellcome to admin" });
});
Admin.use("/users", User);
Admin.use("/artworks", Artwork);
Admin.use("/uploads", Uploads);
Admin.use("/projects", Project);

export default Admin;
