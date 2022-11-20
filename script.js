import { renderList, renderTask } from './render.js';
import { postTask } from './_api.js';


const addTaskForm = document.querySelector('.new-task-form');

addTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = addTaskForm.querySelector('.task-title-input').value;
    const description = addTaskForm.querySelector('.task-description-input').value;
    const date = addTaskForm.querySelector('.date-input').value;

    if (title && description && date) {
        // await postTask({title, description, date});
        const newTask = {title: title, description: description, date: date}
        console.log(newTask);
        renderTask(newTask);
        
    }

})

renderList();