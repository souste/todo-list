import "./index.js";
import { todosArr } from "./todoList.js";

const content = document.querySelector("#content");

function projectPage(projectName) {
  const projectPageContainer = document.createElement("div");
  projectPageContainer.classList.add("project-page-container");

  const projectHeader = document.createElement("h1");
  projectHeader.classList.add("project-header");
  projectHeader.innerText = projectName;

  const listsContainer = document.querySelector(".lists-container");
  const projectListButton = document.createElement("button");
  projectListButton.classList.add("project-list-button");
  projectListButton.innerText = "Add";

  const formContainer = document.querySelector(".form-container");

  projectPageContainer.appendChild(projectHeader);
  projectPageContainer.appendChild(projectListButton);
  projectPageContainer.appendChild(listsContainer);

  content.appendChild(projectPageContainer);

  projectListButton.addEventListener("click", (event) => {
    event.preventDefault();
    formContainer.style.display = "flex";
  });

  const projectTodos = todosArr.filter(
    (todo) => todo.projectName === projectName
  );
  projectTodos.forEach((todo) => todo.renderTodoList());
}

export default projectPage;
