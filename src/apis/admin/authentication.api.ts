import express from "express";
import AuthenService from "../../services/authen.service";
import authUser from "../../middlewares/auth.middleware";
import UserService from "../../services/user.service";
import {
  UserSessionData,
  getSession,
} from "../../middlewares/session.middleware";

const Authentication = express.Router();
const authenService = new AuthenService();

Authentication.post("/login", async (req, res, next) => {
  const session: UserSessionData = req.session;
  const { email, password } = req.body;
  try {
    const user = await authenService.authen(email, password);
    session.userId = user.id;
    console.log(session.id);
    res.json({ response: session.id });
  } catch (error) {
    next(error);
  }
});

Authentication.use(authUser);
Authentication.get("/", async (req, res, next) => {
  const session: UserSessionData = await getSession(req);
  const userService = new UserService();
  const user = await userService.retrieve(session.userId);
  res.json({ response: user });
});

export default Authentication;
