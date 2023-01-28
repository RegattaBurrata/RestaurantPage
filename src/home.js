import createElement from "./element";

function home() {
    const bodyContent = document.querySelector('.body-content');
    bodyContent.innerHTML = '';
    
    const blurb = 'Danil opened on Thanksgiving Day 1945. Chef/Owner Danil Silver began cooking gourmet pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hudson and North Moore St. in Tribeca. Today, NYC’s beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.'

    const bodyContentInfo = createElement('p', 'body-content-info', blurb);

    bodyContent.appendChild(bodyContentInfo);

};

export default home;

//