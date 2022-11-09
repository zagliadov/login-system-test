import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { sequelize } from "./sequelize/sequelize.js";
//****Route
import auth from "./routes/auth.js";
import students from "./routes/students.js";

const app = express(),
  PORT = String(9001);
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/students", students);

sequelize.sync().then(() => {
  app.listen(PORT, async () => {
    console.log(`Server run on: ${PORT}`);
  });
});
