const { Router } = require("express");

const { getAllTasks } = require("../controllers/task.controller"); 

const taskRoutes = Router();

taskRoutes.get("/task", getAllTasks);

module.exports = taskRoutes;