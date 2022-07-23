const { Router } = require("express");

const { getAllTasks, getTask, createTask } = require("../controllers/task.controller"); 

const taskRoutes = Router();

taskRoutes.get("/task", getAllTasks);

taskRoutes.get("/task/:id", getTask);

taskRoutes.post("/task", createTask);

module.exports = taskRoutes;