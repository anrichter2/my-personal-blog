//Query selecting the element that the blog posts will be created under
const mainEl = document.querySelector('.blog-posts')

let blogPosts = [];

//Function for creating and displaying the blog posts
function renderPosts() {
    
    for (let i = 0; i < blogPosts.length; i++) {

        //Creating elements and giving them CSS styles
        const div = document.createElement('div');
        div.setAttribute('style', 'border: 2px solid black; border-radius: 10px; margin: 10px');
        const title = document.createElement('h2');
        title.setAttribute('style', 'text-decoration: underline; margin: 5px 20px');
        const content = document.createElement('p');
        content.setAttribute('style', 'margin: 10px 20px 30px 40px');
        const username = document.createElement('h3');
        username.setAttribute('style', 'font-weight: 300; margin: 10px');

        //Adding text content to the created elements using the information in blogPosts that was retrieved from local storage
        title.textContent = blogPosts[i].title;
        content.textContent = blogPosts[i].content;
        username.textContent = `Posted by ${blogPosts[i].username}`;

        //Appending the created elements so that they display on the page
        mainEl.appendChild(div);
        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(username);
    }
}

//Initial function that runs when the page loads that retrieves saved information in local storage and then use renderPosts function to display posts
function init() {
    const formInfo = JSON.parse(localStorage.getItem('formInfo'));
    if (formInfo !== null) {
        blogPosts = formInfo;
    }
    renderPosts()
};

//Calling initial function
init()