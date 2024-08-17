document.getElementById("add-task").addEventListener("click", function () {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const taskList = document.getElementById("task-list");
  const taskItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", function () {
    editTask(taskItem, taskSpan);
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", function () {
    deleteTask(taskItem);
  });

  taskItem.appendChild(taskSpan);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);

  taskItem.addEventListener("click", function () {
    toggleTaskCompletion(taskSpan);
  });

  taskList.appendChild(taskItem);
}

function toggleTaskCompletion(taskSpan) {
  taskSpan.classList.toggle("completed");
}

function deleteTask(taskItem) {
  taskItem.remove();
}

function editTask(taskItem, taskSpan) {
  const newTaskText = prompt("Edit your task:", taskSpan.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    taskSpan.textContent = newTaskText.trim();
  }
}
