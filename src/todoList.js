import "./style.css";
import "./project.js";

const listsContainer = document.createElement("div");
listsContainer.classList.add("lists-container");

const todosArr = [];

class Todo {
  constructor(title, description, dueDate, priority, notes, projectName) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.projectName = projectName;
  }

  renderTodoList() {
    const listContainer = document.createElement("div");
    listContainer.classList.add("list-container");

    const title = document.createElement("p");
    title.classList.add("list-title");
    title.innerText = `${this.title}`;

    const description = document.createElement("p");
    description.classList.add("list-description");
    description.innerText = `${this.description}`;

    const dueDate = document.createElement("p");
    dueDate.classList.add("list-due-date");
    dueDate.innerText = `Due Date: ${this.dueDate}`;

    const priority = document.createElement("p");
    priority.classList.add("list-priority");
    priority.innerText = `Priority: ${this.priority}`;

    listContainer.appendChild(title);
    listContainer.appendChild(description);
    listContainer.appendChild(dueDate);
    listContainer.appendChild(priority);
    listsContainer.appendChild(listContainer);
    content.appendChild(listsContainer);

    listContainer.addEventListener("click", () => {
      this.openTodoList();
      //   formContainer.style.display = "flex";
    });

    // todosArr.push(this);
  }

  openTodoList() {
    const openListContainer = document.createElement("div");
    openListContainer.classList.add("open-list-container");

    const title = document.createElement("p");
    title.classList.add("open-list-title");
    title.innerText = `Title: ${this.title}`;

    const description = document.createElement("p");
    description.classList.add("open-list-description");
    description.innerText = `Description: ${this.description}`;

    const dueDate = document.createElement("p");
    dueDate.classList.add("open-list-due-date");
    dueDate.innerText = `Due Date: ${this.dueDate}`;

    const priority = document.createElement("p");
    priority.classList.add("open-list-priority");
    priority.innerText = `Priority: ${this.priority}`;

    const notes = document.createElement("form");
    const notesLabel = document.createElement("label");
    notesLabel.innerText = "Notes";
    const notesInput = document.createElement("input");
    notesInput.type = "text";
    notesInput.id = "notes";
    notesInput.name = "notes";
    const notesButton = document.createElement("button");
    notesButton.innerText = "Add";

    const deleteListButton = document.createElement("button");
    deleteListButton.innerText = "Delete";

    const closeListButton = document.createElement("button");
    closeListButton.innerText = "Close";

    closeListButton.addEventListener("click", () => {
      const formContainer = document.querySelector(".form-container");
      formContainer.style.display = "none";
    });

    notes.appendChild(notesLabel);
    notes.appendChild(notesInput);
    notes.appendChild(notesButton);

    openListContainer.appendChild(title);
    openListContainer.appendChild(description);
    openListContainer.appendChild(dueDate);
    openListContainer.appendChild(priority);
    openListContainer.appendChild(notes);
    openListContainer.appendChild(deleteListButton);
    openListContainer.appendChild(closeListButton);
    content.appendChild(openListContainer);

    notesButton.addEventListener("click", (event) => {
      event.preventDefault();
      const notesInput = document.querySelector("#notes");

      const newNote = document.createElement("p");
      newNote.innerText = notesInput.value;
      openListContainer.appendChild(newNote);
      notesInput.value = "";
      //   openListContainer.style.display = "none";
    });

    deleteListButton.addEventListener("click", () => {
      this.deleteTodoList();
    });
  }

  deleteTodoList() {
    const openListContainer = document.querySelector(".open-list-container");
    const listContainer = document.querySelector(".list-container");

    if (confirm("Are you sure") === true) {
      openListContainer.remove();
      listContainer.remove();
    }
    console.log("this one", todosArr);
  }
}

export { Todo, todosArr };
