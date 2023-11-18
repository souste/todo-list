import "./style.css";

const content = document.querySelector("#content");

const listsContainer = document.createElement("div");
listsContainer.classList.add("lists-container");

const menuContainer = document.createElement("div");
const menuHTML = `
<p class="menu-title">Home</p>
<p>Today</p>
<p>This Week</p>
<p class="menu-title">Projects</p>
<p>Get a Job</p>
<p>Odin Project</p>
<p>Fitness</p>
`;

menuContainer.innerHTML = menuHTML;

menuContainer.classList.add("menu-container");
content.appendChild(menuContainer);

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

const topic = new Todo(
  "Coding Project",
  "Need to have it complete by the end of next week",
  "27/11/2023",
  "High"
);

const topic2 = new Todo(
  "Going for a run",
  "Need to go for the run of my life",
  "25/11/2023",
  "Medium"
);

const topic3 = new Todo(
  "Connect with people in the job market",
  "Need to get outside my confort zone and start talking to people since the job boards are too saturated",
  "22/12/2023",
  "High"
);

const topic4 = new Todo(
  "Plan for next year",
  "Might need to re-align my expectations in this current job market",
  "22/12/2023",
  "High"
);

topic.renderTodoList();
topic2.renderTodoList();
topic3.renderTodoList();
topic4.renderTodoList();

// Form

const formContainer = document.createElement("div");

const formHTML = `
<form action="">
<label for="title">Title:</label>
<input type="text" placeholder="Walk the dog">


</form>



`;

formContainer.innerHTML = formHTML;

content.appendChild(formContainer);
