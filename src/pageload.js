
function pageLoad() {
    const content = document.querySelector('#content');

    const createElement = (type, className) => {
        const element = document.createElement(type);
        element.classList.add(className);
        return element;
    };

    const container = createElement('div', 'container');
    const headerContainer = createElement('div', 'header-container');
    const bodyContainer = createElement('div', 'body-container');
    const bodyTitle = createElement('div', 'body-title');
    const title = createElement('p', 'title')
    const bodyContent = createElement('div', 'body-content');
    const description = createElement('p', 'description');

    content.appendChild(container);

    container.appendChild(headerContainer);
    container.appendChild(bodyContainer);

    bodyContainer.appendChild(bodyTitle);
};

export default pageLoad();

//