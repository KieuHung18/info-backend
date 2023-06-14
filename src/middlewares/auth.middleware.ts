import UserUnauthorizedError from "../errors/UserUnauthorizedError";
import { getSession } from "./session.middleware";

const authUser = async (req, res, next) => {
  const session = await getSession(req);
  if (session && session.userId) {
    next();
  } else {
    next(new UserUnauthorizedError());
  }
};

export default authUser;
