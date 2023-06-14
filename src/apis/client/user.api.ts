import express from "express";
import UserService from "../../services/user.service";

const User = express.Router();
const userService = new UserService();

User.get("/", async (req, res, next) => {
  try {
    const user = await userService.findOne();
    res.json({ response: user });
  } catch (error) {
    next(error);
  }
});
export default User;
