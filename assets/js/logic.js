const formInfo = []

const modeToggle = document.querySelector('#mode-toggle');
const container = document.querySelector('.container')
const headerEl = document.querySelector('.header')
const footerEl = document.querySelector('.footer')

let mode = 'light';

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