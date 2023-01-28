import createElement from "./element";

function menu() {
    const content = document.querySelector('.description');

    const blurb = "this is a test"

    const container = createElement('div', 'container');
    const headerContainer = createElement('div', 'header-container');
    const bodyContainer = createElement('div', 'body-container');
    const bodyTitle = createElement('div', 'body-title');
    const title = createElement('p', 'title', "DANIL D'JOUR")
    const bodyContent = createElement('div', 'body-content');
    const description = createElement('p', 'description', blurb);

    content.innerHTML = blurb;

    container.appendChild(headerContainer);
    container.appendChild(bodyContainer);

    bodyContainer.appendChild(bodyTitle);
    bodyContainer.appendChild(bodyContent);

    bodyTitle.appendChild(title);

    bodyContent.appendChild(description);

};

export default menu;