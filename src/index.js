import home from './home';
import menuPage from './menu';
import contactPage from './contact';
import load from './load';

load();

const menuLink = document.querySelector('.menu-link');
menuLink.addEventListener('click', menuPage);

const contactLink = document.querySelector('.contact-link');
contactLink.addEventListener('click', contactPage);

const homeLink = document.querySelector('.logo');
homeLink.addEventListener('click', home);




