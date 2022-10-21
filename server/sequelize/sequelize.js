import dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes, Model } from "sequelize";

export const sequelize = new Sequelize("dataBase", "root", "root", {
  dialect: "mysql",
  host: "dataBase",
});

// class User extends Model {}

// User.init({
//   // Model attributes are defined here
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   password: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'User' // We need to choose the model name
// });
// User.sync();