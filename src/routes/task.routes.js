const { Router } = require("express");

const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require("../controllers/task.controller"); 

const taskRoutes = Router();

taskRoutes.get("/task", getAllTasks);

taskRoutes.get("/task/:id", getTask);

taskRoutes.post("/task", createTask);

taskRoutes.delete("/task/:id", deleteTask);

taskRoutes.put("/task/:id", updateTask);

module.exports = taskRoutes;