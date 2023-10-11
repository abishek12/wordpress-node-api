import { Sequelize } from "sequelize";
import dotenv from "dotenv/config";

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const name = process.env.DB_NAME;

const sequelize = new Sequelize(name, user, pass, {
  host: host,
  dialect: 'mysql',
});

const connection = async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:');
    }
}

export {sequelize, connection};