//Todo: Take blog info from local storage, use .createElement to dynamically create elements with user information, use .appendchild to get information into blog
//Also add light/dark mode controls

const modeToggle = document.querySelector('#mode-toggle');
const container = document.querySelector('.container')
const mainEl = document.querySelector('.blog-posts')

const blogPosts = [];

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

function renderPosts() {
    for (let i = 0; i < blogPosts.length; i++) {
        const blogPosts = blogPosts[i];

        const div = document.createElement('div');
        const title = document.createElement('h3');
        const content = document.createElement('p');
        const username = document.createElement('h4');
        h3.textContent = blogPosts[i].title;
        p.textContent = blogPosts[i].content;
        h4.textContent = blogPosts[i].username;
        mainEl.appendChild(div);
        div.appendChild(title);
        title.appendChild(content);
        content.appendChild(username);
    }
}

function init() {
    const formInfo = JSON.parse(localStorage.getItem('formInfo'));
    if (formInfo !== null) {
        blogPosts = formInfo;
    }
    renderPosts()
};


init()