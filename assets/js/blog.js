//Todo: Take blog info from local storage, use .createElement to dynamically create elements with user information, use .appendchild to get information into blog
//Also add light/dark mode controls

const modeToggle = document.querySelector('#mode-toggle');
const container = document.querySelector('.container')
const mainEl = document.querySelector('.blog-posts')

let blogPosts = [];

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
    console.log(blogPosts)
    for (let i = 0; i < blogPosts.length; i++) {

        const div = document.createElement('div');
        const title = document.createElement('h3');
        const content = document.createElement('p');
        const username = document.createElement('h4');
        title.textContent = blogPosts[i].title;
        content.textContent = blogPosts[i].content;
        username.textContent = blogPosts[i].username;
        mainEl.appendChild(div);
        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(username);
        // akon classList property
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