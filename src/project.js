import "./index.js";
import { Todo, todosArr } from "./todoList.js";
import { parse } from "date-fns";

const content = document.querySelector("#content");
const projectPageContainer = document.createElement("div");
projectPageContainer.classList.add("project-page-container");
const projectHeader = document.createElement("h1");
projectHeader.classList.add("project-header");

function projectPage(projectName, projectTodos = null) {
  projectPageContainer.innerHTML = "";
  projectHeader.innerText = projectName;

  const listsContainer = document.querySelector(".lists-container");
  listsContainer.innerHTML = "";
  const projectListButton = document.createElement("button");
  projectListButton.classList.add("project-list-button");
  projectListButton.innerText = "Add";

  projectPageContainer.appendChild(projectHeader);
  projectPageContainer.appendChild(projectListButton);
  projectPageContainer.appendChild(listsContainer);
  content.appendChild(projectPageContainer);

  const projectTodoFormContainer = document.createElement("div");
  projectTodoFormContainer.classList.add("project-todo-form-container");
  projectTodoFormContainer.style.display = "none";

  const projectFormHTML = `
<form action="">
  <p class="form-header">Create Project Todo Item</p>
  
<div class="label-input-container">
<label for="projectTitle">Title:</label>
<input type="text" placeholder="Walk the dog" id="projectTitle" name="projectTitle">
</div>

<div class="label-input-container">
<label for="projectDescription">Description:</label>
<input type="text" placeholder="Description here" id="projectDescription" name="projectDescription">
</div>

<div class="label-input-container">
<label for="projectDueDate">Due Date:</label>
<input type="text" placeholder="DD/MM/YYYY" id="projectDueDate" name="projectDueDate">
</div>

<div class="label-input-container">
<label for="projectPriority">Priority:</label>
<select id="projectPriority" name="projectPriority">
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>
</div>

<button class="add-project-list-button">Add</button>


</form>
`;

  projectTodoFormContainer.innerHTML = projectFormHTML;
  content.appendChild(projectTodoFormContainer);

  projectListButton.addEventListener("click", (event) => {
    event.preventDefault();
    projectTodoFormContainer.style.display = "flex";
  });

  const addProjectListButton = document.querySelector(
    ".add-project-list-button"
  );

  addProjectListButton.addEventListener("click", addProjectList);

  function addProjectList(event) {
    event.preventDefault();

    const parsedDueDate = parse(projectDueDate.value, "dd/MM/yyyy", new Date());

    const listx = new Todo(
      projectTitle.value,
      projectDescription.value,
      parsedDueDate,
      projectPriority.value,
      "",
      projectName
    );
    listx.renderTodoList();
    todosArr.push(listx);
    projectTodoFormContainer.style.display = "none";
    document.querySelector("form").reset();
    console.log(todosArr);

    // Save to localStorage
    localStorage.setItem("myTodoList", JSON.stringify(todosArr));
    console.log(localStorage.getItem("myTodoList"));
  }

  if (!projectTodos) {
    const storedTodos = JSON.parse(localStorage.getItem("myTodoList"));
    projectTodos = storedTodos.filter(
      (todo) => todo.projectName === projectName
    );
  }

  projectTodos.forEach((todoData) => {
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

export default projectPage;
