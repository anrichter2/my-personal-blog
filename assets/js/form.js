//TODO: Collect and store blog information and save to local storage
//activity 23

const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) { //maybe submit instead of click
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

    formInfo.push({username: username.value, title: title.value.trim(), content: content.value.trim()});

    localStorage.setItem('formInfo', JSON.stringify(formInfo));

    window.location.href = 'blog.html';
});
