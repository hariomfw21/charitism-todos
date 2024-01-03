const mongoose = require("mongoose");
const { TodoModel } = require("../models/todoSchema");

// Create a new Todo
const createTodo = async (req, res) => {
  try {
    const newTodo = new TodoModel({
      user: req.body.userId,
      task: req.body.task,
      status: "Pending",
      completionDate: new Date(),
    });

    const savedTodo = await newTodo.save();
    console.log("Todo created:", savedTodo);

    res
      .status(201)
      .json({ message: "Todo created successfully", todo: savedTodo });
  } catch (error) {
    console.error("Error creating todo:", error);
    res
      .status(500)
      .json({ message: "Error creating todo", error: error.message });
  }
};

// Read all Todos
const readTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find({ user: req.body.userId });
    console.log("All Todos:", todos);
    res.status(200).json({ message: "Todos retrieved successfully", todos });
  } catch (error) {
    console.error("Error reading todos:", error);
    res
      .status(500)
      .json({ message: "Error reading todos", error: error.message });
  }
};

// Update a Todo
const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const newStatus = req.body.status;
    const userId = req.body.userId;

    // Check if the user making the request is the owner of the todo
    const todoToUpdate = await TodoModel.findOne({ _id: todoId, user: userId });

    if (!todoToUpdate) {
      return res
        .status(404)
        .json({ message: "Todo not found or user not authorized" });
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      todoId,
      { $set: { status: newStatus } },
      { new: true }
    );

    console.log("Todo updated:", updatedTodo);
    res
      .status(200)
      .json({ message: "Todo updated successfully", todo: updatedTodo });
  } catch (error) {
    console.error("Error updating todo:", error);
    res
      .status(500)
      .json({ message: "Error updating todo", error: error.message });
  }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const userId = req.body.userId;

    // Check if the user making the request is the owner of the todo
    const todoToDelete = await TodoModel.findOne({ _id: todoId, user: userId });

    if (!todoToDelete) {
      return res
        .status(404)
        .json({ message: "Todo not found or user not authorized" });
    }

    const deletedTodo = await TodoModel.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    console.log("Todo deleted:", deletedTodo);
    res
      .status(200)
      .json({ message: "Todo deleted successfully", todo: deletedTodo });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res
      .status(500)
      .json({ message: "Error deleting todo", error: error.message });
  }
};

module.exports = {
  createTodo,
  readTodos,
  updateTodo,
  deleteTodo,
};
