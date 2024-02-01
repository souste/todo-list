import "./style.css";
import "./project.js";

const listsContainer = document.createElement("div");
listsContainer.classList.add("lists-container");

const todosArr = [];

class Todo {
  constructor(title, description, dueDate, priority, notes, projectName) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate instanceof Date ? dueDate : new Date(dueDate);
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
    description.style.display = "none"; // FIGURE OUT THIS BUT AFTER

    const dueDate = document.createElement("p");
    dueDate.classList.add("list-due-date");
    dueDate.innerText = `${this.dueDate.toLocaleDateString()}`;

    const priority = document.createElement("p");
    priority.classList.add("list-priority", this.priority.toLowerCase());
    priority.innerText = `${this.priority}`;

    const updateRenderedValues = () => {
      title.innerText = this.title;
      description.innerText = this.description;
      dueDate.innerText = `Due Date: ${this.dueDate.toLocaleDateString()}`;
      priority.innerText = this.priority;
    };

    listContainer.appendChild(title);
    listContainer.appendChild(description);
    listContainer.appendChild(dueDate);
    listContainer.appendChild(priority);
    listsContainer.appendChild(listContainer);
    content.appendChild(listsContainer);

    listContainer.addEventListener("click", () => {
      this.openTodoList(updateRenderedValues);
    });
  }

  openTodoList(updateRenderedValues) {
    const openListContainer = document.createElement("div");
    openListContainer.classList.add("open-list-container");

    const title = document.createElement("p");
    title.classList.add("open-list-title");
    title.innerText = `${this.title}`;

    const description = document.createElement("p");
    description.classList.add("open-list-description");
    description.innerText = `${this.description}`;

    const dueDate = document.createElement("p");
    dueDate.classList.add("open-list-due-date");
    dueDate.innerText = `Due Date: ${this.dueDate.toLocaleDateString()}`;

    const priority = document.createElement("p");
    priority.classList.add("list-priority", this.priority.toLowerCase());
    priority.id = "open-list-priority";
    priority.innerText = `${this.priority}`;

    // const notes = document.createElement("form");
    // const notesLabel = document.createElement("label");
    // notesLabel.innerText = "Notes";
    // const notesInput = document.createElement("input");
    // notesInput.type = "text";
    // notesInput.id = "notes";
    // notesInput.name = "notes";
    // const notesButton = document.createElement("button");
    // notesButton.innerText = "Add";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";

    const deleteListButton = document.createElement("div");
    deleteListButton.className = "delete-list-button";
    deleteListButton.innerHTML = `<img src="delete.png" alt="Delete">`;

    const closeListButton = document.createElement("div");
    closeListButton.className = "close-list-button";
    closeListButton.innerHTML = `<img src="tick-mark.png" alt="Tick">`;

    const editButton = document.createElement("div");
    editButton.className = "edit-list-button";
    editButton.innerHTML = `<img src="edit-file.png" alt="Edit">`;

    //////////////////////////////// EDIT FUNCTIONALITY

    const editForm = document.createElement("form");
    editForm.classList.add("edit-form");

    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.value = this.title;

    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.value = this.description;

    const editDueDate = document.createElement("input");
    editDueDate.type = "text";
    editDueDate.value = this.dueDate.toDateString();

    const editPriority = document.createElement("select");
    editPriority.id = "edit-priority";
    const priorities = ["Low", "Medium", "High"];
    priorities.forEach((option) => {
      const priorityOption = document.createElement("option");
      priorityOption.value = option;
      priorityOption.text = option;
      editPriority.add(priorityOption);
    });
    editPriority.value = this.priority;

    const editChangeButton = document.createElement("button");
    editChangeButton.className = "change-edit-button";
    editChangeButton.innerText = "Change";

    editForm.appendChild(editTitle);
    editForm.appendChild(editDescription);
    editForm.appendChild(editDueDate);
    editForm.appendChild(editPriority);
    editForm.appendChild(editChangeButton);
    openListContainer.appendChild(editForm);

    editForm.style.display = "none";

    editButton.addEventListener("click", () => {
      editForm.style.display = "flex";
    });

    editChangeButton.addEventListener("click", (event) => {
      try {
        event.preventDefault();

        const oldTitle = this.title;

        this.title = editTitle.value;
        this.description = editDescription.value;
        this.dueDate = new Date(editDueDate.value);
        this.priority = editPriority.value;

        editForm.style.display = "none";

        title.innerText = this.title;
        description.innerText = this.description;
        dueDate.innerText = `Due Date: ${this.dueDate.toLocaleDateString()}`;
        priority.innerText = editPriority.value;

        const index = todosArr.findIndex((todo) => todo.title === oldTitle);
        if (index !== -1) {
          todosArr[index] = this;

          localStorage.setItem("myTodoList", JSON.stringify(todosArr));
          console.log("Updated in localStorage:", todosArr);
        } else {
          console.error("Todo not found in todosArr");
        }

        updateRenderedValues();
      } catch (error) {
        console.error("Error in editChangeButton click event:", error);
      }
    });

    editForm.style.display = "none";

    ////////////////////////////////

    closeListButton.addEventListener("click", () => {
      openListContainer.style.display = "none";
    });

    // notes.appendChild(notesLabel);
    // notes.appendChild(notesInput);
    // notes.appendChild(notesButton);

    openListContainer.appendChild(title);
    openListContainer.appendChild(description);
    openListContainer.appendChild(dueDate);
    openListContainer.appendChild(priority);
    // openListContainer.appendChild(notes);
    buttonsContainer.appendChild(closeListButton);
    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteListButton);

    openListContainer.appendChild(buttonsContainer);

    content.appendChild(openListContainer);

    // notesButton.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   const notesInput = document.querySelector("#notes");

    //   const newNote = document.createElement("p");
    //   newNote.innerText = notesInput.value;
    //   openListContainer.appendChild(newNote);
    //   notesInput.value = "";
    // });

    deleteListButton.addEventListener("click", () => {
      this.deleteTodoList();
    });
  }

  deleteTodoList() {
    const openListContainers = document.querySelectorAll(
      ".open-list-container"
    );
    const listContainers = document.querySelectorAll(".list-container");

    if (confirm("DELETE TODO: Are you sure?") === true) {
      openListContainers.forEach((openListContainer) => {
        openListContainer.remove();
      });

      listContainers.forEach((listContainer) => {
        listContainer.remove();
      });

      const indexToRemove = todosArr.findIndex(
        (todo) => todo.title === this.title
      );
      if (indexToRemove !== -1) {
        todosArr.splice(indexToRemove, 1);

        localStorage.setItem("myTodoList", JSON.stringify(todosArr));
        location.reload();
      }
    }
  }
}

export { Todo, todosArr, listsContainer };
