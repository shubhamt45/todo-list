const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  // Decide how to insert data to DB
  try {
    const todo = new Todo(req.body);
    const result = await todo.save();
    res.send({
      status: "success",
      message: "Todo created successfully",
      _id: result._id,
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "Todo creation failed",
      error,
    });
  }
};

const getTodo = async (req, res) => {
  // Decide how to insert data to DB
  try {
    const todos = await Todo.find({});
    res.send({
      status: "success",
      message: "Todo Get successfully",
      data: todos,
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "Todo Get failed",
      error,
    });
  }
};

const updateTodo = async (req, res) => {
  // Decide how to insert data to DB
  try {
    const id = req.body._id;
    // record find
    const todo = await Todo.findById(id);
    // change set
    todo.userName = req.body.userName;
    todo.mobile = req.body.mobile;
    // save
    await todo.save();
    res.send({
      status: "success",
      message: "Todo Update successfully",
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "Todo Update failed",
      error,
    });
  }
};

const deleteTodo = async (req, res) => {
  // Decide how to insert data to DB
  try {
    const id = req.body._id;
    // record find
    const todo = await Todo.findById(id);
    await todo.delete();
    console.log("71 res", res);
    res.send({
      status: "success",
      message: "Todo Delete successfully",
    });
  } catch (error) {
    console.log("77 res", res);
    res.send({
      status: "error",
      message: "Todo Delete failed",
      error,
    });
  }
};

module.exports = { createTodo, getTodo, updateTodo, deleteTodo };
