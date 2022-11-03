import express from "express";
const router = express.Router();
import { getStudents, testQuery } from "../controllers/students.js";

router.route("/get-students").get(getStudents);
router.route("/test-query").get(testQuery);

export default router;
