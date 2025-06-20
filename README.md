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
