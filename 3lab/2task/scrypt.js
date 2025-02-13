const input = document.getElementById('input');
const clickbutton = document.getElementById('button');
const list = document.getElementById('list');
const button = document.getElementById('btn');

document.addEventListener('DOMContentLoaded', loadTasks);

clickbutton.addEventListener('click', () => {
    addTask();
});


input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    if (input.value !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const delOneButton = document.createElement('button');
        li.appendChild(delOneButton);
        delOneButton.textContent = "Delete";

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        li.appendChild(doneButton);

        list.appendChild(li);
        input.value = '';

        updateDelAllButton();
        saveTasks();

        delOneButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
            updateDelAllButton();
        });

        doneButton.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
            saveTasks();
        });
    }
}

function updateDelAllButton() {
    const delAllButton = document.getElementById('delete-all-button');

    if (list.childNodes.length > 0 && !delAllButton) {
        const newDelAllButton = document.createElement('button');
        newDelAllButton.id = 'delete-all-button';
        newDelAllButton.textContent = 'Delete all';
        button.appendChild(newDelAllButton);

        newDelAllButton.addEventListener('click', () => {
            list.innerHTML = '';
            newDelAllButton.remove();
            saveTasks();
        });
    } else if (list.childNodes.length === 0 && delAllButton ) {
        delAllButton.remove();
    }
}

function saveTasks() {
    const tasks = [];   
    list.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.childNodes[0].nodeValue.trim()
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        input.value = task.text;
        addTask();
    });
}