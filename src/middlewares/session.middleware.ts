import expressSession, { Session } from "express-session";
import redisStore from "../databases/redis.database";
import dotenv from "dotenv";
import { EXPRESS_SESSION_MAX_AGE } from "./constant";

dotenv.config();

export interface SessionData extends Session {
  userId?: string;
}

export const getSession = async (req): Promise<SessionData> => {
  let sessionData: SessionData;
  await redisStore.get(req.headers.authentication, (err, session) => {
    if (err) {
      console.log(err);
    }
    sessionData = session;
  });
  return sessionData;
};

const session = expressSession({
  store: redisStore,
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: EXPRESS_SESSION_MAX_AGE,
    // sameSite: "none",
    // httpOnly: true,
    // secure: true,
  },
});

export default session;
