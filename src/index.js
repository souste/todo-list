import "./style.css";
// PROPERTIES:
// title
// description
// dueDate
// priority - three levels??
// notes
// checlist ?

// projects or separate list of todos

const content = document.querySelector("#content");

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

const listsContainer = document.createElement("div");
listsContainer.classList.add("lists-container");

function addDetailsToDom(obj) {
  const listContainer = document.createElement("div");
  listContainer.classList.add("list-container");

  const title = document.createElement("p");
  title.classList.add("list-title");
  title.innerText = `Title: ${obj.title}`;

  const description = document.createElement("p");
  description.classList.add("list-description");
  description.innerText = `Description: ${obj.description}`;

  const dueDate = document.createElement("p");
  dueDate.classList.add("list-due-date");
  dueDate.innerText = `Due Date: ${obj.dueDate}`;

  const priority = document.createElement("p");
  priority.classList.add("list-priority");
  priority.innerText = `Priority: ${obj.priority}`;

  listContainer.appendChild(title);
  listContainer.appendChild(description);
  listContainer.appendChild(dueDate);
  listContainer.appendChild(priority);
  listsContainer.appendChild(listContainer);
  content.appendChild(listsContainer);
}

console.log(topic);
addDetailsToDom(topic);

console.log(topic2);
addDetailsToDom(topic2);

console.log(topic3);
addDetailsToDom(topic3);

consoooole.log("jeevy");
