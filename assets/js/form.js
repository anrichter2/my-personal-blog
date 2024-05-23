//selecting elements by their id
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

//Creating the initial array that will hold user information
let formInfo = []

formInfo = JSON.parse(localStorage.getItem('formInfo'));

//If statement that will change formInfo back into an empty array if local storage is empty and changed formInfo to null
if (formInfo === null) {
    formInfo = [];
}

//Event listener that activates when submit button is pressed that will take inputed info and add it to formInfo then saves to local storage
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    //If any part of the form is empty then if statement will stop funtion before saving to local storage and will display message
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

    //Adds inputed information to formInfo array then saves to local storage
    formInfo.push({username: username.value, title: title.value.trim(), content: content.value.trim()});
    localStorage.setItem('formInfo', JSON.stringify(formInfo));

    //Sends user to blog posts page
    window.location.href = 'blog.html';
});
