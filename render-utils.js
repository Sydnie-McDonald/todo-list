export function renderTodo(todo) {
    // create a div and a p tag
    console.log(todo);
    const div = document.createElement('div');
    const todoEl = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    div.classList.add(todo.complete ? 'complete' : 'incomplete');
    // add the 'todo' css class no matter what
    div.classList.add('todo');
    // put the todo's text into the p tag
    todoEl.textContent = todo.todo;
    // append stuff
    div.append(todoEl);
    // return the div
    return div;
}