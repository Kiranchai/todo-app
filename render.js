import { fetchTasks } from './_api.js';

const taskList = document.querySelector('.task-list');
    

const getTaskHTML = (element) => {
    const {title, date, description} = element;

    return ` 
        <div class="task-header">
            <h3>${title}</h3>
            <div class="task-actions">
                <button class="task-button">Edytuj</button>
                <button class="task-button">Usuń</button>
            </div>
        </div>

        <span>${date}</span>
        <span>${description}</span>
        `;
}

export const renderTask = (task) => {
    const element = document.createElement('li');
    element.classList.add('task');
    element.innerHTML = getTaskHTML(task);

    taskList.appendChild(element);
}

export const renderList = async () => {
    const loadedTasks = await fetchTasks();
    taskList.innerHTML = '';

    loadedTasks.tasks.forEach(task => {
        renderTask(task);
    });
}