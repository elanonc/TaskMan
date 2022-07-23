const { Router } = require("express");
const db = require("../db");

const taskRoutes = Router();

taskRoutes.get("/task", async (request, response) => {
    response.send("Executando...");
})

module.exports = taskRoutes;