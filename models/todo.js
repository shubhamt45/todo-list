const mongoose = require("mongoose");

const schema = mongoose.Schema;

const todoScheama = new schema({
  userName: String,
  mobile: String,
});

const Todo = mongoose.model("Todo", todoScheama);

module.exports = Todo;
