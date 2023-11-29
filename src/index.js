import "./style.css";
import { Todo, todosArr } from "./todoList.js";
import projectPage from "./project.js";

const content = document.querySelector("#content");
const menuContainer = document.createElement("div");
const formContainer = document.createElement("div");
formContainer.classList.add("form-container");
const projectFormContainer = document.createElement("div");
projectFormContainer.classList.add("project-form-container");
const newListButton = document.querySelector(".new-list-button");
newListButton.classList.add("new-list-button");
const addListButton = document.querySelector(".add-list-button");
const newProjectButton = document.querySelector(".new-project-button");
newProjectButton.classList.add("new-project-button");
const addProjectButton = document.querySelector(".add-project-button");

// LOCAL STORAGE

window.addEventListener("load", () => {
  const storedTodos = JSON.parse(localStorage.getItem("myTodoList"));

  if (storedTodos) {
    todosArr.push(...storedTodos);

    storedTodos.forEach((todoData) => {
      const loadedTodo = new Todo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority,
        todoData.notes,
        todoData.project
      );
      loadedTodo.renderTodoList();
    });
  }
});

// MENU CONTAINER

const menuHTML = `

<h1 class="top-menu-title">LIFE'S TODOS</h1>


<p class="menu-title">Home</p>
<p>Today</p>
<p>This Week</p>

<div class="title-button-container">
<p class="menu-title">My Projects</p>
<button class="new-project-button">+</button>
</div>

<p>Get a Job  - hardcoded</p>
<p>Odin Project - hard coded</p>
<p>Fitness - hardcoded</p>


<button class="new-list-button">+</button>
`;

menuContainer.innerHTML = menuHTML;
menuContainer.classList.add("menu-container");
content.appendChild(menuContainer);

// ADD A NEW TODO LIST BUTTON

newListButton.addEventListener("click", (event) => {
  event.preventDefault();
  formContainer.style.display = "flex";
});

// ADD NEW TODO LIST FORM

const formHTML = `
<form action="">
  <p class="form-header">Create Todo Item</p>
  
<div class="label-input-container">
<label for="title">Title:</label>
<input type="text" placeholder="Walk the dog" id="title" name="title">
</div>

<div class="label-input-container">
<label for="description">Description:</label>
<input type="text" placeholder="Description here" id="description" name="description">
</div>

<div class="label-input-container">
<label for="dueDate">Due Date:</label>
<input type="text" placeholder="Need to download that plugin!" id="dueDate" name="dueDate">
</div>

<div class="label-input-container">
<label for="priority">Priority:</label>
<input type="text" placeholder="Need a dropdown here" id="priority" name="priority">
</div>

<button class="add-list-button">Add</button>


</form>
`;

formContainer.innerHTML = formHTML;

content.appendChild(formContainer);
formContainer.style.display = "none";

// ADD NEW TODO LIST BUTTON (FROM FORM)

addListButton.addEventListener("click", addList);

let currentProject = "";

function addList(event) {
  event.preventDefault();
  const listx = new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    "",
    currentProject
  );
  listx.renderTodoList();
  todosArr.push(listx);
  formContainer.style.display = "none";
  document.querySelector("form").reset();
  console.log(todosArr);

  // Save to localStorage
  localStorage.setItem("myTodoList", JSON.stringify(todosArr));
  console.log(localStorage.getItem("myTodoList"));
}

// ADD A NEW PROJECT TAB BUTTON

newProjectButton.addEventListener("click", (event) => {
  event.preventDefault();
  projectFormContainer.style.display = "flex";
});

// ADD PROJECT FORM

const projectFormHTML = `
<form action="">
<p class="form-header">Create New Project</p>
<div>
<label for="name">Name:</label>
<input type="text" placeholder="Get a Job" id="name" name="name">
</div>

<button class="add-project-button">Add</button>
</form>
`;

projectFormContainer.innerHTML = projectFormHTML;

content.appendChild(projectFormContainer);
projectFormContainer.style.display = "none";

// ADD PROJECT BUTTON (FROM FORM)

addProjectButton.addEventListener("click", (event) => {
  event.preventDefault();
  const projectNameInput = document.querySelector("#name");
  currentProject = projectNameInput.value;

  const newProject = document.createElement("p");

  newProject.innerText = projectNameInput.value;
  newProject.classList.add("project-select");
  newProject.id = `${projectNameInput.value}`;

  menuContainer.appendChild(newProject);

  projectFormContainer.style.display = "none";

  newProject.addEventListener("click", projectPage(projectNameInput.value));
});
