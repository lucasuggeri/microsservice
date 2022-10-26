import express, { response } from "express";
//import connectToDatabase from "./src/config/database/dbConnector.js";
import AppError from "./src/config/appError.js";
import { errors } from "celebrate";
//import Controller from "./src/modules/speakers/speakersController.js";

const app = express();
const port = 3333;

//const controller = new Controller();

app.use(express.json());

app.use(errors());
app.use((error, request, responde, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});
//app.post("/inventory", controller.handle);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
