const request = require('supertest');
const app = require('../../server'); // Make sure your Express app is exported from server.js
const { connect, closeDatabase, clearDatabase } = require('../setup');
const Todo = require('../../models/todo');

beforeAll(async () => await connect());
afterEach(async () => await clearDatabase());
afterAll(async () => await closeDatabase());

describe('To-Do API Integration Tests', () => {
  it('POST /api/todos - should create a todo', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ title: 'Test Task', completed: false });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Task');
  });

  it('GET /api/todos - should get all todos', async () => {
    await Todo.create({ title: 'Task 1', completed: false });
    const res = await request(app).get('/api/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('PUT /api/todos/:id - should update a todo', async () => {
    const todo = await Todo.create({ title: 'Task 1', completed: false });
    const res = await request(app)
      .put(`/api/todos/${todo._id}`)
      .send({ completed: true });
    expect(res.statusCode).toBe(200);
    expect(res.body.completed).toBe(true);
  });

  it('DELETE /api/todos/:id - should delete a todo', async () => {
    const todo = await Todo.create({ title: 'Task 1', completed: false });
    const res = await request(app).delete(`/api/todos/${todo._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
