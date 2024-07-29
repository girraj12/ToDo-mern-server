// taskRoutes.js
import express from "express";
import {
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
} from "../controller/controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
