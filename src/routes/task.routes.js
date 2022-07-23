const { Router } = require("express");

const taskRoutes = Router();

taskRoutes.get("/task", (request, response) => {
    response.send("Hello World");
})

module.exports = taskRoutes;