const { response } = require("express");
const db = require("../db");

const getAllTasks = async (request, response) => {
    const allTasks = await db.query("SELECT * FROM task");
    return response.json(allTasks.rows);
}

const getTask = async (request, response) => {
    const { id } = request.params;
    const result = await db.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rows.length === 0) {
        return response.status(400).json({ error: "Task not found" });
    } 

    return response.json(result.rows[0]);  
}

const createTask = async (request, response) => {
    const { title, description } = request.body;
    
    await db.query("INSERT INTO task (title, description) VALUES ($1, $2)", [title, description]);
    
    return response.status(201).send();
}

const deleteTask = async (request, response) => {
    const { id } = request.params;

    const result = await db.query("DELETE FROM task WHERE id = $1", [id]);

    if (result.rowCount === 0) {
        return response.status(400).json({ error: "Task not found" });
    } 

    return response.status(200);
}

const updateTask = async (request, response) => {
    const { id } = request.params;
    const { title, description } = request.body;

    const result = await db.query("UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING * ", [title, description, id]);

    if (result.rows.length === 0){
        return response.status(400).json({ error: "Task not found" })
    }

    return response.status(201).json(result.rows[0]);
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    deleteTask,
    updateTask
}