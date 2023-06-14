import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/postgres.database";
import { Artwork, ImageProps } from "./artwork.model";
import { Project } from "./project.model";

export interface UserProps extends Model {
  id: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  hashPassword: string;
  title: string | null;
  intro: string | null;
  description: string | null;
  aboutMe: string | null;
  phone: string | null;
  address: string | null;
  profile: ImageProps | null;
  createdAt: Date;
  updatedAt: Date;

  getArtworks;
  removeArtwork;
  createArtwork;

  getProjects;
  removeProject;
  createProject;
  hasProject;
}

export const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING(20),
    },
    lastName: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hashPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(45),
    },
    intro: {
      type: DataTypes.STRING(20),
    },
    description: {
      type: DataTypes.STRING(800),
    },
    aboutMe: {
      type: DataTypes.STRING(45),
    },
    phone: {
      type: DataTypes.STRING,
    },
    profile: {
      type: DataTypes.JSONB,
    },
    address: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(Artwork, {
  as: "artworks",
  foreignKey: "userId",
});
Artwork.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});
User.hasMany(Project, {
  as: "projects",
  foreignKey: "userId",
});
Project.belongsTo(User, {
  as: "user",
  foreignKey: "userId",
});
