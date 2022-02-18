import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    // on submit, create a todo, reset the form, and display the todos
    // prevents the default action when a link is clicked, page refresh 
    e.preventDefault();
    //create a todo
    const data = new FormData(todoForm);
    await createTodo(data.get('todo'));
    displayTodos();
    todoForm.reset();
});

async function displayTodos() {
    // fetch the todos

    // display the list of todos

    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load
window.addEventListener('load', async () => {
    const todoList = await getTodos();
    for (let todo of todos) {
        const li = renderTodo(todo);
        todosEl.append(li);
    }
});

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos

    // then refetch and display the updated list of todos
});
