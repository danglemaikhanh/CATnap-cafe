(function init() {
    "use strict";
    /*==== Toggle Nav Menu ====*/
    const navLinks = document.querySelector('.nav__links');
    const iconToggles = document.querySelector('.nav__toggle');
    const icon = document.querySelector('.bx-menu');
    document.querySelector('#menu-icon').onclick = () => {
        navLinks.classList.toggle('show');
    }
    iconToggles.onclick = () => {
        if (icon.classList.contains('bx-menu')) {
            icon.classList.replace('bx-menu', 'bx-x');
        }
        else {
            icon.classList.replace('bx-x', 'bx-menu');
        }
    }
})();