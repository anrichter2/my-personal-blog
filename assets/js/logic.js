//Query selecting specific elements based on class or id
const modeToggle = document.querySelector('#mode-toggle');
const container = document.querySelector('.container')
const headerEl = document.querySelector('.header')
const footerEl = document.querySelector('.footer')

//Setting page to initially be light mode
let mode = 'light';

//Event listener for when the light/dark mode toggle is clicked and an if loop to change classes on element based off what they switch to
modeToggle.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'container soft-dark');
        headerEl.setAttribute('class', 'header hard-dark');
        footerEl.setAttribute('class', 'footer hard-dark');
    } else {
        mode = 'light';
        container.setAttribute('class', 'container hard-light');
        headerEl.setAttribute('class', 'header soft-light');
        footerEl.setAttribute('class', 'footer soft-light');
    }
});