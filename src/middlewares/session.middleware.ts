import expressSession, { Session } from "express-session";
import redisStore from "../databases/redis.database";
import mongoStore from "../databases/mongo.database";
import dotenv from "dotenv";
import { EXPRESS_SESSION_MAX_AGE } from "./constant";

dotenv.config();

export interface UserSessionData extends Session {
  userId?: string;
}

// export const getSession = async (req): Promise<SessionData> => {
//   let sessionData: SessionData;
//   await redisStore.get(req.headers.authentication, (err, session) => {
//     if (err) {
//       console.log(err);
//     }
//     sessionData = session;
//   });
//   return sessionData;
// };

export const getSession = (req, cb): UserSessionData => {
  let sessionData: any;
  mongoStore.get(req.headers.authentication, (err, session) => {
    if (err) {
      console.log(err);
    }
    cb(session);
  });
  return sessionData;
};
// export const getSession = async (req): Promise<SessionData> => {
//   const sessionData: SessionData = req.session;
//   return sessionData;
// };

const session = expressSession({
  store: mongoStore,
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
