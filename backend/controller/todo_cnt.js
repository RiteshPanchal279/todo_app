import { Todos } from "../models/todoModel.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTodo = await Todos.create({ title });
    res
      .status(201)
      .json({ newTodo, message: "Todo created succesfully", success: true });
  } catch (error) {
    console.log("Error in createTodo:", error);
    res.status(500).json({ message: "Failed to create todo", success: false });
  }
};

export const getAllTodo = async (req, res) => {
  try {
    const todos = await Todos.find();
    res.status(200).json({ todos, success: true });
  } catch (error) {
    console.log("Error in getAllTodo:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch todos", todos, success: false });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todos.findByIdAndDelete(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res
      .status(200)
      .json({ message: "Todo deleted successfully", success: true });
  } catch (error) {
    console.log("Error in deleteTodo:", error);
    res.status(500).json({ message: "Failed to delete todo", success: false });
  }
};
