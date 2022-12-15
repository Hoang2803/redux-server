import { TodoModel } from "../model/TodoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTodo = async (req, res) => {
  const data = req.body;

  try {
    const todo = new TodoModel(data);
    todo.save();
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { completed } = req.body;
    const id = req.params.id;

    const todo = await TodoModel.findOneAndUpdate(
      { _id: id },
      { completed },
      {
        new: true,
      }
    );

    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json(error);
  }
};
