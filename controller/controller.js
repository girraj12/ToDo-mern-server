// taskController.js
import Task from "../models/task.js";

export const createTask = async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ error: "Task not found" });
        }
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true } // Return the updated document
        );
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.status(500).send(error);
    }
};
