import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/postgres.database";
import { ImageProps } from "./artwork.model";

export interface ProjectProps extends Model {
  id: string;
  name: string;
  description: string;
  content: string;
  images: ImageProps[];
  feature: boolean;
  publish: boolean;
}
export const Project = sequelize.define(
  "Project",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSONB,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(800),
    },
    content: {
      type: DataTypes.STRING(8000),
    },
    feature: {
      type: DataTypes.BOOLEAN,
    },
    publish: {
      type: DataTypes.BOOLEAN,
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
