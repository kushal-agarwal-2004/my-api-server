# Todo List Manager API

A simple RESTful API and frontend for managing a todo list, built with Node.js, Express, and MongoDB Atlas.

## API Endpoints

| Method | Endpoint              | Description                   |
|--------|----------------------|-------------------------------|
| POST   | /api/todos           | Create a new todo             |
| GET    | /api/todos           | Get all todos                 |
| PATCH  | /api/todos/:id       | Toggle completion status      |
| DELETE | /api/todos/:id       | Delete a todo                 |



## Example Requests
### Create a Todo
**Request:**


**Response:**

### Get All Todos
**Request:**

### Toggle Completion
**Request:**

undefined

## How to Run the Server

1. Install dependencies:
2. Set your MongoDB Atlas connection string in `server.js`:
3. Start the server:
4. The server will run on [http://localhost:5000](http://localhost:5000)
## How to Run the Frontend

1. Make sure the server is running.
2. Open `index.html` in your browser:
   - Double-click the file, OR
   - Right-click and choose "Open with" → your browser, OR
   - Use VS Code Live Server extension.
3. Use the form to add, complete, and delete todos.
## How to Connect to MongoDB Atlas

1. Create a free MongoDB Atlas account and cluster.
2. Whitelist your IP address and create a database user.
3. Get your connection string from the Atlas dashboard.
4. Paste your connection string into `server.js`:
5. Replace `<username>`, `<password>`, and `<dbname>` with your actual credentials.
## Project Structure

my-api-server/
├── node_modules/
├── Todo.js
├── server.js
├── package.json
└── index.html


## Credits

Built as a learning project for Node.js, Express, and MongoDB CRUD APIs[1].

The server runs on `http://localhost:5000` by default.

---

## How to Run Tests

1. **Run All Tests with Coverage**
# To-Do List API Server

A Node.js and Express-based REST API for managing to-do tasks, with MongoDB (Atlas or local) for persistent storage.  
This project demonstrates robust API design, database integration, and thorough testing—including unit, integration, and API (endpoint) tests with code coverage.

---

## Features

- **CRUD API**: Create, read, update, and delete to-do items.
- **MongoDB Integration**: Uses MongoDB Atlas for production and `mongodb-memory-server` for isolated testing.
- **Comprehensive Testing**: Includes unit, integration, and API tests using Jest and Supertest.
- **Code Coverage**: Test coverage is measured and reported.

---

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas (cloud), Mongoose ODM
- **Testing**: Jest, Supertest, mongodb-memory-server

---

## API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/todos`     | Create a new to-do item |
| GET    | `/api/todos`     | Get all to-do items     |
| PUT    | `/api/todos/:id` | Update a to-do item     |
| DELETE | `/api/todos/:id` | Delete a to-do item     |

**Sample To-Do JSON:**
{
"title": "Buy groceries",
"completed": false
}


---

## How to Run the Application

1. **Clone the Repository**

git clone https://github.com/yourusername/my-api-server.git
cd my-api-server


2. **Install Dependencies**

3. **Configure MongoDB (Atlas)**
- Create a `.env` file with your MongoDB URI:
  ```
  MONGO_URI=your-mongodb-atlas-uri
  ```

4. **Start the Server**
The server runs on `http://localhost:5000` by default.

---

## How to Run Tests

1. **Run All Tests with Coverage**
- This runs unit, integration, and API tests.
- Coverage report is generated in `coverage/lcov-report/index.html`.

2. **View Coverage Report**
- Open `coverage/lcov-report/index.html` in your browser to see detailed coverage.

---

## Testing Details

- **Unit Tests:**  
Test service logic in isolation using Jest mocks for the database (see `tests/unit/todoService.test.js`).

- **Integration/API Tests:**  
Test full API endpoints with an in-memory MongoDB using Supertest and mongodb-memory-server (see `tests/integration/todo.test.js`).

- **Coverage:**  
Achieved over 70% code coverage across service and API logic.

- **Frameworks Used:**  
- Jest
- Supertest
- mongodb-memory-server

---

## Project Structure


---

## Sample Test Coverage Screenshot

(Add your screenshot here after running `npm test` and generating coverage.)

---

## How to Use the API

You can use tools like Postman or `curl` to interact with the API endpoints.

**Example: Create a To-Do**

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


