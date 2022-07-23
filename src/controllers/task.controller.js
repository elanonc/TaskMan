const db = require("../db");

const getAllTasks = async (request, response) => {
    const allTasks = await db.query("SELECT * FROM task");
    response.json(allTasks.rows);
}

const createTask = async (request, response) => {
    const { title, description } = request.body;
    
    await db.query("INSERT INTO task (title, description) VALUES ($1, $2)", [title, description]);
    
    return response.status(201).send();
}

module.exports = {
    getAllTasks,
    createTask
}