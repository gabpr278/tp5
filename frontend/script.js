const urlAPI = "http://localhost:3000";
const todoList = document.getElementById('todoList');
const taskInput = document.getElementById('taskInput');

function getTodos() {
    fetch(`${urlAPI}/todos`)
        .then(response => response.json())
        .then(data => {
            todoList.innerHTML = '';
            data.forEach(todo => {
                const li = document.createElement('li');
                li.className = todo.done ? 'done' : '';

                li.innerHTML = `
                    <span onclick="toggleTodo(${todo.id})" style="cursor:pointer;">${todo.task}</span>
                    <button onclick="deleteTodo(${todo.id})">❌</button>
                `;
                todoList.appendChild(li);
            });
        })
        .catch(err => console.error('Erreur', err));
}

function createTodo() {
    const taskText = taskInput.value;
    if (!taskText) return;

    fetch(`${urlAPI}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: taskText })
    })
        .then(() => {
            taskInput.value = '';
            getTodos();
        });
}

function toggleTodo(id) {
    fetch(`${urlAPI}/todos/${id}`, {
        method: 'PUT'
    })
        .then(() => getTodos());
}

function deleteTodo(id) {
    fetch(`${urlAPI}/todos/${id}`, {
        method: 'DELETE'
    })
        .then(() => getTodos());
}

getTodos();