import express from "express";
import { addTask, getTask, getTasks, removeTask, updateTask } from "../controllers/task.js";
const router = express.Router();

router.route("/").get(getTasks).post(addTask);
router.route("/:id").get(getTask).put(updateTask).delete(removeTask);

export default router;
