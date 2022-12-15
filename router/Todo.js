import express from "express";

import { getTodos, createTodo, updateTodo } from "../controller/todo.js";

const router = express.Router();

router.get("/show", getTodos);
router.post("/create", createTodo);
router.put("/update/:id", updateTodo);

export default router;
