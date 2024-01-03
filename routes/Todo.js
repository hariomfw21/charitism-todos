const express = require("express");
const {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const Todo = express.Router();

// Create a new todo
Todo.post("/create", createTodo);

// Read all todos
Todo.get("/read", readTodos);

// Update a todo by ID
Todo.put("/update/:id", updateTodo);

// Delete a todo by ID
Todo.delete("/delete/:id", deleteTodo);

module.exports = Todo;
