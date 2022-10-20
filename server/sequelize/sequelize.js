import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('dataBase', 'root', 'root', {
    dialect: 'mysql',
    host: 'dataBase',
});