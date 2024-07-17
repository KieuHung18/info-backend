import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const userName = process.env.POSTGRES_USER_NAME;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const port = process.env.POSTGRES_PORT;

const sequelize = new Sequelize("postgres", userName, password, {
  host: host,
  dialect: "postgres",
  port: parseInt(port),
});

export default sequelize;
