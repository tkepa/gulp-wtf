
const navigationSwitcher = document.querySelector(".nav__switcher--js");

navigationSwitcher.addEventListener('click', (e) => {
    const navigationMenu = document.querySelector(".nav__menu--js")
    navigationMenu.classList.toggle("nav__menu--visible");
        
    } 
)