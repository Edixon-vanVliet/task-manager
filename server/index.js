import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
