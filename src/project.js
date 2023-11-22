import Todo from "./todoList.js";
import "./index.js";
const projectListsContainer = document.createElement("div");
projectListsContainer.classList.add("project-lists-container");

function filterByProject(projectName) {
  const projectHeader = document.createElement("h1");
  projectHeader.innerText = projectName;

  const newListByProjectButton = document.createElement("button");
  newListByProjectButton.innerText = "Add";
  projectListsContainer.appendChild(newListByProjectButton);

  const listsContainer = document.querySelector(".lists-container");
  listsContainer.style.display = "none";

  newListByProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    formContainer.style.display = "flex";
  });

  projectListsContainer.appendChild(projectHeader);
  content.appendChild(projectListsContainer);
}

class TodoByProject extends Todo {
  constructor(title, description, dueDate, priority, notes, projectID) {
    super(title, description, dueDate, priority, notes);
    this.projectID = projectID;
  }
}

function addProjectList(event) {
  event.preventDefault();
  const listx = new TodoByProject(
    title.value,
    description.value,
    dueDate.value,
    priority.value,
    projectID ? `projectNameInput.value` : null
  );
  listx.renderTodoList();
  formContainer.style.display = "none";
  title.value = "";
  description.value = "";
  dueDate.value = "";
  priority.value = "";
}

export default filterByProject;
