function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskList = document.getElementById('taskList');

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.onclick = function() {
    taskList.removeChild(taskItem);
  };

  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);

  taskItem.onclick = function() {
    taskItem.classList.toggle('complete');
  };

  taskList.appendChild(taskItem);
  taskInput.value = '';
}
