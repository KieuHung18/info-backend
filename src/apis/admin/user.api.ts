import express from "express";
import UserService from "../../services/user.service";

const User = express.Router();
const userService = new UserService();

User.post("/", async (req, res, next) => {
  try {
    await userService.create(req.body);
    res.json({ response: "User added" });
  } catch (error) {
    next(error);
  }
});
User.post("/:id", async (req, res, next) => {
  try {
    await userService.update(req.params.id, req.body);
    res.json({ response: "Updated success" });
  } catch (error) {
    next(error);
  }
});

User.get("/:id", async (req, res, next) => {
  try {
    const user = await userService.retrieve(req.params.id);
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
});
User.delete("/:id", async (req, res) => {
  // req.params.id
  res.json({ response: "Work in progess... nothing yet" });
});
export default User;
