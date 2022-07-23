const express = require("express");
const morgan = require("morgan");

const router = require("./routes/task.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Server is running!"));