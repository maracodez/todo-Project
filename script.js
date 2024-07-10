document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');

    const taskItem = document.createElement('li');
    taskItem.className = 'taskItem';
    taskItem.textContent = taskText;

    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskInput.focus();
  }
});

document.getElementById('deleteAllButton').addEventListener('click', function() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
})