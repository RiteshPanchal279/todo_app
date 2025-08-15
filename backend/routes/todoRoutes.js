import express from "express";
import {
  createTodo,
  getAllTodo,
  deleteTodo
} from "../controller/todo_cnt.js";

const router = express.Router();

router.post("/", createTodo);    
router.get("/", getAllTodo);      
router.delete("/:id", deleteTodo);

export default router;
