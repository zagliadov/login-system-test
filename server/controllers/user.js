import dotenv from "dotenv";
dotenv.config();
import { sequelize } from "../sequelize/sequelize.js";

export const getUser = async (req, res) => {
  try {
    const user = await sequelize.query(
      `SELECT * FROM Users`
    );
    res.status(200).json(user[0]);
  } catch (error) {
    console.log(error);
  }
};