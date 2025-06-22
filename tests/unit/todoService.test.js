const Todo = require('../../models/todo');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('../../services/todoService');

jest.mock('../../models/todo');

afterEach(() => jest.clearAllMocks());

test('createTodo should save and return the new todo', async () => {
  const data = { title: 'Test Task', completed: false };
  const savedTodo = { _id: '1', ...data };
  Todo.prototype.save = jest.fn().mockResolvedValue(savedTodo);

  const result = await createTodo(data);
  expect(result).toEqual(savedTodo);
  expect(Todo.prototype.save).toHaveBeenCalled();
});

test('getTodos should return all todos', async () => {
  const todos = [
    { _id: '1', title: 'Task 1', completed: false },
    { _id: '2', title: 'Task 2', completed: true }
  ];
  Todo.find.mockResolvedValue(todos);

  const result = await getTodos();
  expect(result).toEqual(todos);
  expect(Todo.find).toHaveBeenCalled();
});

test('updateTodo should update and return the todo', async () => {
  const id = '1';
  const data = { completed: true };
  const updatedTodo = { _id: id, title: 'Task 1', completed: true };
  Todo.findByIdAndUpdate.mockResolvedValue(updatedTodo);

  const result = await updateTodo(id, data);
  expect(result).toEqual(updatedTodo);
  expect(Todo.findByIdAndUpdate).toHaveBeenCalledWith(id, data, { new: true });
});

test('deleteTodo should delete and return the todo', async () => {
  const id = '1';
  const deletedTodo = { _id: id, title: 'Task 1', completed: false };
  Todo.findByIdAndDelete.mockResolvedValue(deletedTodo);

  const result = await deleteTodo(id);
  expect(result).toEqual(deletedTodo);
  expect(Todo.findByIdAndDelete).toHaveBeenCalledWith(id);
});
