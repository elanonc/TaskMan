const { Router } = require("express");

const { getAllTasks, createTask } = require("../controllers/task.controller"); 

const taskRoutes = Router();

taskRoutes.get("/task", getAllTasks);

taskRoutes.post("/task", createTask);

module.exports = taskRoutes;