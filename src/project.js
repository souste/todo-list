import Todo from "./todoList.js";
import "./index.js";

function projectPage(projectName) {
  const listsContainer = document.querySelector(".lists-container");
  const projectListButton = document.createElement("button");
  projectListButton.innerText = "Add";
  const formContainer = document.querySelector(".form-container");
  console.log(projectName);
  // Need to turn this into a filter since it might mess up the local storage but OK for now:
  listsContainer.innerText = "";

  const projectHeader = document.createElement("h1");
  projectHeader.innerText = projectName;
  listsContainer.appendChild(projectHeader);
  listsContainer.appendChild(projectListButton);

  projectListButton.addEventListener("click", (event) => {
    event.preventDefault();
    formContainer.style.display = "flex";
  });
}

// const projectHeader = document.createElement("h1");
//   projectHeader.innerText = projectName;

//   const newListByProjectButton = document.createElement("button");
//   newListByProjectButton.innerText = "Add";

//   const listsContainer = document.querySelector(".lists-container");
//   listsContainer.style.display = "none";
//   projectListsContainer.innerText = "";

//   const formContainer = document.querySelector(".form-container");

//   newListByProjectButton.addEventListener("click", addProjectList);

//   function addProjectList(event) {
//     event.preventDefault();
//     formContainer.style.display = "flex";

//     const listx = new Todo(
//       title.value,
//       description.value,
//       dueDate.value,
//       priority.value
//     );
//     listx.renderTodoList();
//     formContainer.style.display = "none";
//     title.value = "";
//     description.value = "";
//     dueDate.value = "";
//     priority.value = "";
//     console.log(listx);
//   }

//   projectListsContainer.appendChild(projectHeader);
//   projectListsContainer.appendChild(newListByProjectButton);
//   content.appendChild(projectListsContainer);

export default projectPage;
