document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', formSubmit)
});

function formSubmit(event) {
  event.preventDefault();
  const tasksList = document.getElementById('tasks')
  const newTask = document.createElement('li')
  const input = document.querySelector('#new-task-description').value
  newTask.innerText = input;
  const deleteButton = document.createElement('button')
  deleteButton.innerText = "DELETE"
  deleteButton.addEventListener('click', deleteItem)
  tasksList.appendChild(newTask)
  newTask.append(deleteButton)
  // const priority = document.getElementById('')
  event.target.reset()
}

function deleteItem (event) {
  event.target.parentElement.remove()
}