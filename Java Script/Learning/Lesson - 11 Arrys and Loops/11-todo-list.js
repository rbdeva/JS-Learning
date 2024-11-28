const todoList = ['make dinner', 'wash dishes']; //Empty array
for(let i=0;i<){

}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);

  inputElement.value = ' ';
}