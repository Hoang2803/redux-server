import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import connectDatabase from "./config/connectDatabase.js";
import Todo from "./router/Todo.js";

const app = express();
const PORT = process.env.PORT || 5000;

connectDatabase();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/todo", Todo);

app.listen(PORT, (req, res) => {
  console.log("server is running on port " + PORT);
});
