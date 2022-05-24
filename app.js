//selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//ecouteur
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", supcheckTodo);
filterOption.addEventListener("input", filtertodo)

//fonction
function addTodo(event){
    event.preventDefault();



// todo div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");

// création des cases
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//button validé
const completeButton = document.createElement("button");
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add("complete-btn");
todoDiv.appendChild(completeButton);




//button supp
const delButton = document.createElement("button");
delButton.innerHTML = '<i class="fas fa-trash"></i>';
delButton.classList.add("del-btn");
todoDiv.appendChild(delButton);


//ajout todo à todo list
todoList.appendChild(todoDiv);
todoInput.value = "";
}

function supcheckTodo(e){
    const item = e.target;
    //sup todo
    
    if (item.classList[0] === "del-btn") { 
    const todo = item.parentElement;
    todo.classList.add("fall")
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
        todo.remove();
    })}

if (item.classList[0] === "complete-btn") { 
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}}

function filtertodo(e){
const todos = todoList.childNodes;
todos.forEach(function (todo) { 
    switch (e.target.value) {
        case "all":
            todo.style.display = "flex";
            break;
        case "completed":
            if (todo.classList.contains("completed")) {
                todo.style.display = "flex";
            }
            else {
                todo.style.display ="none";
            }
            break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display ="none";
                }
                break;
    }
}) ;
}
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }