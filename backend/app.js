const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));
app.use(express.json());

function readData() {
    const data = fs.readFileSync('./data.json', 'utf8');
    return JSON.parse(data);
}

function writeData(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
}

app.get('/todos', (req, res) => {
    const data = readData();
    res.status(200).json(data.todos);
});

app.post('/todos', (req, res) => {
    const data = readData();

    const newTodo = {
        id: Date.now(),
        task: req.body.task,
        done: false
    };

    data.todos.push(newTodo);
    writeData(data);

    res.status(201).json({ message: 'Tâche créée !', todo: newTodo });
});

app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = readData();

    const todoIndex = data.todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({ message: 'Tâche introuvable' });
    }

    data.todos[todoIndex].done = !data.todos[todoIndex].done;
    writeData(data);

    res.status(200).json({ message: 'Tâche mise à jour !', todo: data.todos[todoIndex] });
});


app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = readData();

    const filteredTodos = data.todos.filter(t => t.id !== id);

    if (data.todos.length === filteredTodos.length) {
        return res.status(404).json({ message: 'Tâche introuvable' });
    }

    data.todos = filteredTodos;
    writeData(data);

    res.status(200).json({ message: 'Tâche supprimée !' });
});

app.listen(port, () => console.log(`Serveur en écoute sur http://localhost:${port}`));