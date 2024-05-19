//Todo: Take blog info from local storage, use .createElement to dynamically create elements with user information, use .appendchild to get information into blog
//Also add light/dark mode controls

const modeToggle = document.querySelector('#mode-toggle');
const container = document.querySelector('.container')

let mode = 'light';

modeToggle.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark'
        container.setAttribute('class', 'dark');
    } else {
        mode = 'light'
        container.setAttribute('class', 'light')
    }
})

