import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    priority: {
      type: String,
      require: true,
    },
    completed: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  { timestamps: true }
);

export const TodoModel = mongoose.model("Todo", schema);
