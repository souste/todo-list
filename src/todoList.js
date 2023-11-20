const listsContainer = document.createElement("div");
listsContainer.classList.add("lists-container");

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  renderTodoList() {
    const listContainer = document.createElement("div");
    listContainer.classList.add("list-container");

    const title = document.createElement("p");
    title.classList.add("list-title");
    title.innerText = `Title: ${this.title}`;

    const description = document.createElement("p");
    description.classList.add("list-description");
    description.innerText = `Description: ${this.description}`;

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
  }
}

export default Todo;
