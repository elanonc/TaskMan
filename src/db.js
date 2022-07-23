const {Pool} = require("pg");
require('dotenv').config();

const db = new Pool ({
    user: process.env.POSTGRESQL_USER,
    password: process.env.POSTGRESQL_PASSWORD,
    host: process.env.POSTGRESQL_HOST,
    port: process.env.POSTGRESQL_PORT,
    database: process.env.POSTGRESQL_DATABASE
})

module.exports = db;