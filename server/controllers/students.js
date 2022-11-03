import dotenv from "dotenv";
dotenv.config();
import { sequelize } from "../sequelize/sequelize.js";

export const getStudents = async (req, res) => {
  try {
    const students = await sequelize.query(
      `SELECT * FROM students`
    );
    res.status(200).json(students[0]);
  } catch (error) {
    console.log(error);
  }
};

export const testQuery = async (req, res) => {
  try {
    const students = await sequelize.query(
      `SELECT 
        id,
        surname,
        name,
        birthday,
        stipend
       FROM students WHERE NOT ((birthday = '1993-06-07' or stipend > 500) and id >= 9)`
    );
    res.status(200).json(students[0]);
  } catch (error) {
    console.log(error);
  }
};