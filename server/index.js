import express from "express";
import * as dotenv from "dotenv";
import taskRouter from "./routers/task.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());
app.use("/api/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
