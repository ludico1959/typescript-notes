import express, { response } from "express";
import { createCourse } from "./routes";

const app = express();

app.get("/", createCourse);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
