const { Router } = require("express");
const db = require("../db");
const { getAllTasks } = require("../controllers/task.controller"); 

const taskRoutes = Router();

taskRoutes.get("/task", getAllTasks);

module.exports = taskRoutes;