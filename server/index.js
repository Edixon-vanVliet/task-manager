import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import taskRouter from "./routers/task.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());
app.use("/api/tasks", taskRouter);

mongoose.connect(process.env.CONNECTION_STRING, {}, () => {
  app.listen(port, (error) => {
    if (!error) {
      console.log(`Listening on port ${port}...`);
    } else {
      console.error(error);
    }
  });
});
