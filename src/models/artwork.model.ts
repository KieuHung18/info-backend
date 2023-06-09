import { DataTypes, Model } from "sequelize";
import sequelize from "../databases/postgres.database";

export interface ImageProps {
  publicId: string;
  url: string;
}
export interface ArtworkProps extends Model {
  id: string;
  image: ImageProps;
  name: string;
  feature: boolean;
  publish: boolean;
}

export const Artwork = sequelize.define(
  "Artwork",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
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
