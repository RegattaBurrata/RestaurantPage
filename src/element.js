const createElement = (type, className, content = '') => {
    const element = document.createElement(type);
    element.classList.add(className);
    element.textContent = content;
    return element;
};

export default createElement;