const db = require("../db");
const getAllTasks = async (request, response) => {
    response.send("Executing...");
}

module.exports = {
    getAllTasks
}