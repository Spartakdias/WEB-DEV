const input = document.getElementById('input');
const clickbutton = document.getElementById('button');
const list = document.getElementById('list');
const button = document.getElementById('btn');

clickbutton.addEventListener('click', () => {
    addTask();
});

const state = {
    notes: [
        {text: '', status: true},
    ],
    filters: 'all'
};

input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
        ev.preventDefault();
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

        delOneButton.addEventListener('click', () => {
            li.remove();
            updateDelAllButton();
        });

        doneButton.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
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
        });
    } else if (list.childNodes.length === 0 && delAllButton ) {
        delAllButton.remove();
    }
}
