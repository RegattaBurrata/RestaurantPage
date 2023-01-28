import createElement from "./element";

function load() {
    const content = document.querySelector('#content');

    const blurb = 'Danil opened on Thanksgiving Day 1945. Chef/Owner Danil Silver began cooking gourmet pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.'

    const container = createElement('div', 'container');

    const nav = createElement('div', 'nav');
    const menuButton = createElement('p', 'menu-link', 'MENU');
    const logo = createElement('p', 'logo', "DANIL D'JOUR");
    const contactButton = createElement('p', 'contact-link', 'CONTACT');
    const bodyContent = createElement('div', 'body-content');
    const bodyContentInfo = createElement('p', 'body-content-info', blurb);

    content.appendChild(container);

    container.appendChild(nav);
    container.appendChild(bodyContent);

    nav.appendChild(menuButton);
    nav.appendChild(logo);
    nav.appendChild(contactButton);

    bodyContent.appendChild(bodyContentInfo);

};

export default load;