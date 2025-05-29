document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.querySelector('.task-list-content');
    const clearButton = document.getElementById('clearButton');

    // Add task
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Clear all tasks
    clearButton.addEventListener('click', () => {
        taskList.innerHTML = '';
    });

    // Add task DOM element
    function addTask(text) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
        deleteBtn.addEventListener('click', () => {
            taskDiv.remove();
        });

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${Date.now()}`;

        const label = document.createElement('label');
        label.setAttribute('for', checkbox.id);
        label.textContent = text;

        taskDiv.appendChild(deleteBtn);
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);

        taskList.appendChild(taskDiv);
    }
});

