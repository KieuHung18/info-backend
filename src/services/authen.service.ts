import UserUnauthorizedError from "../errors/UserUnauthorizedError";
import { User, UserProps } from "../models/user.model";
import bcrypt from "bcrypt";

class AuthenService {
  public async authen(email: string, password: string): Promise<UserProps> {
    const user = (await User.findOne({
      where: {
        email: email,
      },
    })) as UserProps;
    return user;
    if (user) {
      const match = await bcrypt.compare(password, user.hashPassword);
      if (match) {
        return user;
      }
    }
    throw new UserUnauthorizedError();
  }
}
export default AuthenService;
