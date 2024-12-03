const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
const DATA_FILE = 'todos.json';

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Helper to read data from the file
function readTodos() {
  if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
}

// Helper to write data to the file
function writeTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

// GET all todos
app.get('/todos', (req, res) => {
  const todos = readTodos();
  res.status(200).json(todos);
});

// POST a new todo
app.post('/todos', (req, res) => {
  try {
      const todo = req.body; // Parse the JSON body
      const todos = readTodos();
      const newTodo = {
          id: Date.now(),
          ...todo,
      };
      todos.push(newTodo);
      writeTodos(todos);
      res.status(201).json(newTodo);
  } catch (err) {
      res.status(400).json({ error: 'Invalid JSON input' });
  }
});

// PUT to update an existing todo
app.put('/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedTodo = req.body;

  let todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === id);

  if (index !== -1) {
      todos[index] = { ...todos[index], ...updatedTodo };
      writeTodos(todos);
      res.status(200).json(todos[index]);
  } else {
      res.status(404).json({ error: 'Todo not found' });
  }
});

// DELETE a todo by ID
app.delete('/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  let todos = readTodos();
  const initialLength = todos.length;
  todos = todos.filter((todo) => todo.id !== id);

  if (todos.length !== initialLength) {
      writeTodos(todos);
      res.status(204).send(); // No content
  } else {
      res.status(404).json({ error: 'Todo not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});