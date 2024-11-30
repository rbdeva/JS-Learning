const todoList = []; //Empty array

renderTodoList();
function renderTodoList(){
    let todoListHTML ='';
    for(let i=0;i<todoList.length;i++){

    let todo = todoList[i];
    let html = `
    <p>
    ${todo} 
    <button onclick=" 
    todoList.splice(${i}, 10);
    "> Delete </button>
     </p>`;
    todoListHTML += html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = ' ';

renderTodoList();
}