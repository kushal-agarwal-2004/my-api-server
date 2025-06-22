const Todo = require('../models/todo');

async function createTodo(data) {
  const todo = new Todo(data);
  return await todo.save();
}

async function getTodos() {
  return await Todo.find();
}

async function updateTodo(id, data) {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
}

async function deleteTodo(id) {
  return await Todo.findByIdAndDelete(id);
}

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
