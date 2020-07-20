/* VARIABLES */
const Menu = document.querySelector('div.MenuOpen a');

const MenuOpen = document.querySelector('div.MenuHover');
let Clicks = 0;

/* EVENTO */
Menu.addEventListener('click', AbrirMenu);

/* FUNCION */

function AbrirMenu(e) {
    e.preventDefault();
    MenuOpen.style.display = 'flex';
    MenuOpen.classList.remove('MenuHover2');
    MenuOpen.classList.add('MenuHover');
    Clicks++;

    if (Clicks == 2) {
        MenuOpen.classList.remove('MenuHover');
        MenuOpen.classList.add('MenuHover2');
        Clicks = 0;
    }
}