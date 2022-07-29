const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const router = require("./routes/task.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(router);


app.use((err, request, response, next) => {
    return response.status(500).json({
      status: "error",
      message: err.message,
    });
});

app.listen(5432, () => console.log("Server is running!"));