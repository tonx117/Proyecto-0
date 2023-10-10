import { Sequelize, Model, DataTypes } from "sequelize";
import { config as dotenvConfig } from "dotenv";

dotenvConfig(); 

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql",
  }
);

export { sequelize, Model, DataTypes };
