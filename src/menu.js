const menuContainer = document.createElement("div");
const menuHTML = `
<p class="menu-title">Home</p>
<p>Today</p>
<p>This Week</p>
<p class="menu-title">Projects</p>
<p>Get a Job</p>
<p>Odin Project</p>
<p>Fitness</p>

<button class="new-list-button">New</button>


`;

menuContainer.innerHTML = menuHTML;

menuContainer.classList.add("menu-container");
content.appendChild(menuContainer);

const newListButton = document.querySelector(".new-list-button");

newListButton.addEventListener("click", (event) => {
  event.preventDefault();
  formContainer.style.display = "flex";
});

// ADD LIST FORM

const formContainer = document.createElement("div");
formContainer.classList.add("form-container");

const formHTML = `
<form action="">
  
  
<div>
<label for="title">Title:</label>
<input type="text" placeholder="Walk the dog" id="title" name="title">
</div>

<div>
<label for="description">Description:</label>
<input type="text" placeholder="Description here" id="description" name="description">
</div>

<div>
<label for="dueDate">Due Date:</label>
<input type="text" placeholder="Need to download that plugin!" id="dueDate" name="dueDate">
</div>

<div>
<label for="priority">Priority:</label>
<input type="text" placeholder="Need a dropdown here" id="priority" name="priority">
</div>

<button class="add-list-button">Add</button>


</form>
`;

formContainer.innerHTML = formHTML;

content.appendChild(formContainer);
formContainer.style.display = "none";

const addListButton = document.querySelector(".add-list-button");

addListButton.addEventListener("click", (event) => {
  event.preventDefault();
  const listx = new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );
  listx.renderTodoList();
  formContainer.style.display = "none";
});
