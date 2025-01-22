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
