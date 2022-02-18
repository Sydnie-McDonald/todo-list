export function renderTodo(todo) {
    // create a div and a p tag
    const div = document.createElement('div');
    const todoEl = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')

    // add the 'todo' css class no matter what
    div.classList.add('todos-main');
    // put the todo's text into the p tag
    todoEl.textContent(todo);
    // append stuff
    div.append(div, todoEl);
    // return the div
    return div;
}