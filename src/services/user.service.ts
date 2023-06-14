import BadRequest from "../errors/base-error/bad-request.error";
import { User, UserProps } from "../models/user.model";
import bcrypt from "bcrypt";
import { BYCRYPT_SALT_ROUNDS } from "./constant";
import EmailConflictError from "../errors/EmailConflictError";
import UserNotFoundError from "../errors/UserNotFoundError";

class UserService {
  private async hashPassword(password: string): Promise<string> {
    const hashPassword = await bcrypt
      .hash(password, BYCRYPT_SALT_ROUNDS)
      .then(function (hash) {
        return hash;
      });
    return hashPassword;
  }
  public async create(user): Promise<UserProps> {
    try {
      user.hashPassword = await this.hashPassword(user.hashPassword);
      return (await User.create(user)) as UserProps;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        throw new BadRequest(error.name, error.message);
      }
      if (error.name === "SequelizeUniqueConstraintError") {
        throw new EmailConflictError();
      }
      throw error;
    }
  }

  public async retrieve(id: string): Promise<UserProps> {
    const user = await User.findByPk(id, {
      attributes: { exclude: ["hashPassword"] },
    });
    if (user) {
      return user as UserProps;
    } else {
      throw new UserNotFoundError();
    }
  }

  public async findOne(): Promise<UserProps> {
    const user = await User.findOne({
      attributes: { exclude: ["hashPassword"] },
    });
    if (user) {
      return user as UserProps;
    } else {
      throw new UserNotFoundError();
    }
  }

  public async update(id: string, data: UserProps) {
    if (data.hashPassword) {
      data.hashPassword = await this.hashPassword(data.hashPassword);
    }
    const user = await this.retrieve(id);
    Object.assign(user, data);
    user.save();
  }
}
export default UserService;
