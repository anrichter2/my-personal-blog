//Todo: Take blog info from local storage, use .createElement to dynamically create elements with user information, use .appendchild to get information into blog
//Also add light/dark mode controls


const mainEl = document.querySelector('.blog-posts')


let blogPosts = [];

function renderPosts() {
    console.log(blogPosts)
    for (let i = 0; i < blogPosts.length; i++) {

        const div = document.createElement('div');
        div.setAttribute('style', 'border: 2px solid black; border-radius: 10px; margin: 10px');
        const title = document.createElement('h2');
        title.setAttribute('style', 'text-decoration: underline; margin: 5px 20px');
        const content = document.createElement('p');
        content.setAttribute('style', 'margin: 10px 20px 30px 40px');
        const username = document.createElement('h3');
        username.setAttribute('style', 'font-weight: 300; margin: 10px');
        title.textContent = blogPosts[i].title;
        content.textContent = blogPosts[i].content;
        username.textContent = `Posted by ${blogPosts[i].username}`;
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