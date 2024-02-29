

const menuHamburger = document.querySelector('.menu__hamburguer');
const menu = document.querySelector('.menu-list')

menuHamburger.addEventListener('click', (e) => {
    menu.classList.toggle('menu-list-active')
    
});