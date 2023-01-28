import createElement from "./element";
import home from "./home";
import Menu from "./menu-constructor";

Menu.newMenuItem('Burger', '100% angus fire-grilled burger topped with lettuce, tomato, red onion and our house sauce. Served with fries or side salad.', '$19');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
Menu.newMenuItem('Turkey Burger', 'Here is another description of a burger', '$15');
    
function menuPage() {
    const bodyContent = document.querySelector('.body-content');
    bodyContent.innerHTML = '';

    
    console.log(Menu.items)

    Menu.items.forEach(menuItem => {
        const menuItemDiv = createElement('div', 'menu-item-div');
        const dish = createElement('p', 'menu-item-dish');
        const description = createElement('p', 'menu-item-description');
        const price = createElement('p', 'menu-item-price')
        dish.textContent = menuItem.dish;
        description.textContent = menuItem.description;
        price.textContent = menuItem.price;
        bodyContent.appendChild(menuItemDiv);
        menuItemDiv.appendChild(dish);
        menuItemDiv.appendChild(description);
        menuItemDiv.appendChild(price);
    })

    const menuItem = createElement('p', 'menu-item', blurb);

    
    bodyContent.appendChild(menuItem);

};

export default menuPage;