import { SessionData } from "express-session";
import UserUnauthorizedError from "../errors/UserUnauthorizedError";
import { getSession } from "./session.middleware";

const authUser = async (req, res, next) => {
  // let session:SessionData = await getSession(req,session);
  getSession(req, (session) => {
    if (session && session.userId) {
      next();
    } else {
      next(new UserUnauthorizedError());
    }
  });
  // if (session && session.userId) {
  //   next();
  // } else {
  //   next(new UserUnauthorizedError());
  // }
};

export default authUser;
