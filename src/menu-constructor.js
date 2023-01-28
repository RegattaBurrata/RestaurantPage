const Menu = (() => {
    const items = [];
    const newMenuItem = (dish, description, price) => {
        items.push({ dish, description, price });
        return items
    }
    return { newMenuItem, items };
})();

export default Menu;