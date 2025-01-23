const todoList1 = [];

function addTasks1() {
  const inputElement = document.querySelector('.task-input');
  const todoName = inputElement.value;

  todoList1.push(todoName);

  console.log(todoList1);
  inputElement.value = '';
}

const todoList2 = [];

function addTasks2() {
  const inputElement = document.querySelector('.task-input2');
  const todoName = inputElement.value;

  todoList2.push(todoName);
  console.log(todoList2);

  let todoListHTML = '';

  for (let i = 0; i < todoList2.length; i++) {
    let todoTasks = todoList2[i];
    let html = `<p>${todoTasks}</p>`;
    todoListHTML += html;
  
    console.log(html);
    document.querySelector('.display-todo-task').innerHTML = todoListHTML;
  }
}

const todoArray = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoArray.length; i++) {
    const todoObject = todoArray[i];

    const {name, dueDate} = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoArray.splice(${i}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-task-grid').innerHTML = todoListHTML;
}

function addTasks3() {
  const inputElement = document.querySelector('.js-todo-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-todo-duedate-input');
  const dueDate = dateInputElement.value;

  todoArray.push({
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}
