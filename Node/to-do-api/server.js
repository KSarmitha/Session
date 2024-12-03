const http = require('http');
const fs = require('fs');

const PORT = 3000;
const DATA_FILE = 'todos.json';

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

// Create the server
const server = http.createServer((req, res) => {
    console.log(req);
    if (req.method === 'GET' && req.url === '/todos') {
        const todos = readTodos();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
    } else if (req.method === 'POST' && req.url === '/todos') {
        let body = '';
        req.on('data', (chunk) => (body += chunk.toString()));
        req.on('end', () => {
            try {
                const todo = JSON.parse(body); // Parse the JSON body
                const todos = readTodos();
                const newTodo = {
                    id: Date.now(),
                    ...todo,
                };
                todos.push(newTodo);
                writeTodos(todos);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newTodo));
            } catch (err) {
                // Handle JSON parsing errors or empty body
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON input' }));
            }
        });
    } else if (req.method.startsWith('PUT') && req.url.startsWith('/todos/')) {
        const id = req.url.split('/')[2];
        let body = '';
        req.on('data', chunk => (body += chunk));
        req.on('end', () => {
            const updatedTodo = JSON.parse(body);
            let todos = readTodos();
            todos = todos.map(todo => (todo.id === Number(id) ? { ...todo, ...updatedTodo } : todo));
            writeTodos(todos);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedTodo));
        });
    } else if (req.method.startsWith('DELETE') && req.url.startsWith('/todos/')) {
        const id = req.url.split('/')[2];
        let todos = readTodos();
        todos = todos.filter(todo => todo.id !== Number(id));
        writeTodos(todos);
        res.writeHead(204); // No content
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
