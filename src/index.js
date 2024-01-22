import "./style.css";
import { Todo, todosArr } from "./todoList.js";
import projectPage from "./project.js";
import { parse } from "date-fns";

const content = document.querySelector("#content");
const menuContainer = document.createElement("div");
const formContainer = document.createElement("div");
formContainer.classList.add("form-container");
const projectFormContainer = document.createElement("div");
projectFormContainer.classList.add("project-form-container");

// LOCAL STORAGE
// Todo List Local Storage

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

// Projects Tab Local Storage

window.addEventListener("load", () => {
  const storedProjects = JSON.parse(localStorage.getItem("myProjects"));

  if (storedProjects) {
    projectsArr.push(...storedProjects);

    storedProjects.forEach((projectData) => {
      const loadedProject = new Project(projectData.name);
      loadedProject.renderProject();
    });
    projectsArr.forEach((project) => {
      const projectName = document.getElementById(project.name);
      projectName.addEventListener("click", () => projectPage(projectName.id));
    });
  }
});

// MENU CONTAINER

const menuHTML = `


<h1 class="top-menu-title">LIFE'S TODOS</h1>
<p class="menu-title" id="menu-home">Home</p>
<div class="title-button-container">
<p class="menu-title">My Projects</p>
<button class="new-project-button">+</button>
</div>
<button class="new-list-button">+</button>


`;

menuContainer.innerHTML = menuHTML;
menuContainer.classList.add("menu-container");

const projectNamesContainer = document.createElement("div");
projectNamesContainer.classList.add("project-names-container");

content.appendChild(menuContainer);
content.appendChild(projectNamesContainer);

// NEW TODO LIST BUTTON

const newListButton = document.querySelector(".new-list-button");
newListButton.classList.add("new-list-button");

newListButton.addEventListener("click", (event) => {
  event.preventDefault();
  formContainer.style.display = "flex";
});

// NEW TODO LIST FORM

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
<input type="text" placeholder="DD/MM/YYYY" id="dueDate" name="dueDate">
</div>

<div class="label-input-container">
<label for="priority">Priority:</label>
<select id="priority" name="priority">
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>
</div>

<button class="add-list-button">+</button>
<button class="close-list-button">X</button>


</form>
`;

formContainer.innerHTML = formHTML;

content.appendChild(formContainer);
formContainer.style.display = "none";

// ADD TODO LIST BUTTON (FROM FORM)

const addListButton = document.querySelector(".add-list-button");

addListButton.addEventListener("click", addList);

function addList(event) {
  event.preventDefault();
  const parsedDueDate = parse(dueDate.value, "dd/MM/yyyy", new Date());
  const listx = new Todo(
    title.value,
    description.value,
    parsedDueDate,
    priority.value,
    ""
  );
  listx.renderTodoList();
  todosArr.push(listx);
  formContainer.style.display = "none";
  document.querySelector("form").reset();

  // Save to localStorage
  localStorage.setItem("myTodoList", JSON.stringify(todosArr));
  console.log(localStorage.getItem("myTodoList"));
}

// PROJECT CLASS

const projectsArr = [];

class Project {
  constructor(name) {
    this.name = name;
    this.id = name;
  }
  renderProject() {
    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.innerText = this.name;
    projectName.id = this.name;

    const projectNamesContainer = document.querySelector(
      ".project-names-container"
    );
    projectNamesContainer.appendChild(projectName);

    menuContainer.insertBefore(projectNamesContainer, newListButton);
  }
}

// NEW PROJECT BUTTON

const newProjectButton = document.querySelector(".new-project-button");
newProjectButton.classList.add("new-project-button");

newProjectButton.addEventListener("click", (event) => {
  event.preventDefault();
  projectFormContainer.style.display = "flex";
});

// NEW PROJECT FORM

const projectFormHTML = `
<form action="">
<p class="form-header">Create New Project</p>
<div>
<label for="name">Name:</label>
<input type="text" placeholder="Get a Job" id="name" name="name">
</div>

<button class="add-project-button">Add</button>
<button class="close-project-button">Close</button>
</form>
`;

projectFormContainer.innerHTML = projectFormHTML;

content.appendChild(projectFormContainer);
projectFormContainer.style.display = "none";

// ADD PROJECT BUTTON (FROM FORM)

const addProjectButton = document.querySelector(".add-project-button");

addProjectButton.addEventListener("click", addProject);

function addProject(event) {
  event.preventDefault();
  const projectNameInput = document.querySelector("#name");
  const projectx = new Project(projectNameInput.value);
  projectx.renderProject();
  projectsArr.push(projectx);
  projectFormContainer.style.display = "none";

  const projectName = document.getElementById(projectx.name);
  projectName.addEventListener("click", () => projectPage(projectName.id));

  // Save to localStorage
  localStorage.setItem("myProjects", JSON.stringify(projectsArr));
  console.log(localStorage.getItem("myProjects"));
}

const menuHome = document.getElementById("menu-home");
formContainer.innerHTML = "";

//  HOME BUTTON - CLICK FOR FULL TODO LIST

menuHome.addEventListener("click", () => {
  document.body.classList.remove("hide-content");
  location.reload();
});
