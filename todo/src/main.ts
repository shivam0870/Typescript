import './style.css'

interface Todo {
  title : string,
  isCompleted : boolean,
  readonly id : string
}

const todos : Todo [] = [];

const todosContainer = document.querySelector(".todoContainer") as HTMLDivElement

const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

// Function to render todos
function renderTodos() {
  todosContainer.innerHTML = ""; // Clear existing todos
  todos.forEach(todo => {
    const todoElement = document.createElement("div");
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
      <input type="checkbox" ${todo.isCompleted ? "checked" : ""} onchange="toggleComplete('${todo.id}')">
      <span class="${todo.isCompleted ? "completed" : ""}">${todo.title}</span>
      <button onclick="deleteTodo('${todo.id}')">Delete</button>
    `;
    todosContainer.appendChild(todoElement);
  });
}

// Function to delete a todo
function deleteTodo(id: string) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index > -1) {
    todos.splice(index, 1);
    renderTodos(); // Re-render todos
  }
}

// Function to toggle completion status
function toggleComplete(id: string) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.isCompleted = !todo.isCompleted;
    renderTodos(); // Re-render todos
  }
}

// Update the onsubmit function to render todos
myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };
  todos.push(todo);
  todoInput.value = ""; // Clear input field
  renderTodos(); // Render todos
}
