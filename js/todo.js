const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
//const toDoinput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");


let toDos = [];

function saveTodos () {
  localStorage.setItem("todos",JSON.stringify(toDos))
}


function deleteToDo (event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo (newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click",deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubit);



const savedTodos = localStorage.getItem("todos")

if (savedTodos !==null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}