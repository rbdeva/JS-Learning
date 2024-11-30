const todoList = [{
  name: 'make dinner',
  dueDate: '12-01-2024'
}, {
  name: 'wash dishes',
  dueDate: '12-01-2024'
}]; //Empty array 

renderTodoList();
function renderTodoList(){
    let todoListHTML ='';
    for(let i=0;i<todoList.length;i++){

    let todoObject = todoList[i];
    //const name = todoObject.name;
    // const {name} = todoObject; destructuring
    // const dueDate = todoObject.dueDate;
    //const {dueDate} = todoObject;
    let {name, dueDate} = todoObject;

    let html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick=" 
    todoList.splice(${i}, 1);
    renderTodoList();
    "class="delete-todo-button"
    > Delete </button>
    `;
    todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;
  /*
  todoList.push({name: name, second name is above variable
    dueDate: dueDate  second due date is abpve variable
}); shorthand properrty
*/  

todoList.push({
  name,
  dueDate
})
  console.log(todoList);

  inputElement.value = ' ';

renderTodoList();
}