const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

const addTask = (taskText) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;
    taskList.appendChild(li);

    li.querySelector('button.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });
};
