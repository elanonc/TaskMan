const express = require("express");
const morgan = require("morgan");

const router = require("./routes/task.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(router);


app.use((err, request, response, next) => {
    /*if(error){
        return response.status(500).json({
            status: "error",
            message: error.message,
          });
    }*/
    return response.status(500).json({
      status: "error",
      message: err.message,
    });
});

app.listen(3000, () => console.log("Server is running!"));