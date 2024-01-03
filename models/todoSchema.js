const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Dues"],
      default: "Pending",
    },
    completionDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = {
  TodoModel,
};
