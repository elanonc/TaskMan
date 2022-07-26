const { Router } = require("express");

const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require("../controllers/task.controller"); 

const taskRoutes = Router();

taskRoutes.get("/task", getAllTasks);

taskRoutes.get("/task/:id", getTask);

taskRoutes.post("/task", createTask);

taskRoutes.put("/task/:id", updateTask);

taskRoutes.delete("/task/:id", deleteTask);

module.exports = taskRoutes;