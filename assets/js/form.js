//TODO: Collect and store blog information and save to local storage
//activity 23

const modeToggle = document.querySelector('#mode-toggle');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

let mode = 'light';

modeToggle.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    } else {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
});

const formInfo = []

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (username.value === '') {
        alert('Please complete the entire form');
        return;
    } else if (title.value === '') {
        alert('Please complete the entire form');
        return;
    } else if (content.value === '') {
        alert('Please complete the entire form');
        return;
    }

    formInfo.push({username: username.value, title: title.value, content: content.value.trim()});

    localStorage.setItem('formInfo', JSON.stringify(formInfo));
});
