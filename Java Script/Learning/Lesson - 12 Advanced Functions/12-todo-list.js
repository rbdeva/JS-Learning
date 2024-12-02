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

    todoList.forEach(function(todoObject, index){
    
    let {name, dueDate} = todoObject;

    let html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button 
    class="delete-todo-button js-delete-todo-button"
    > Delete </button>
    `;
    todoListHTML += html;
    });

    /* Insted of .forEach()
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
    */
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    /* As you can see in the let html =``; its just a string and we havent put that button on the page too, we kept that button on page on the above line using .innerHTML=todoListHTML;

    Other problem: we have multiple delete buttons too and querySelector only gives us the first one. But we have to select all the buttons n the page that matches this criteoria. so we can use querySelectorAll: will gives us all the elements on the page that has the class .js-delete-todo-button class.
    */

   
    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () =>{
          todoList.splice(index, 1);
          renderTodoList();
        });
    });
     /* To summamrize, we used querySelectorAll to get a list of all delete buttons on the page and then we loop through the list using forEach
    and for each delete button we added a click event listener
    */
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

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