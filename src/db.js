const {Pool} = require("pg");

const db = new Pool ({
    user: "postgres",
    password: "e14092000",
    host: "localhost",
    port: "3333",
    database: "taskdb"
})

module.exports = db;