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
    /*==== Scroll Nav Menu ====*/
    const navLink = document.querySelectorAll('.link');
    const articles = document.querySelectorAll('.article');
    let currentArticle = 'home';
    window.addEventListener('scroll', () => {
        articles.forEach(article => {
            if (window.scrollY >= article.offsetTop - 100) {
                currentArticle = article.id;
            }
        });
        navLink.forEach(link => {
            if (link.href.includes(currentArticle)) {
                document.querySelector('.active').classList.remove('active');
                link.classList.add('active');
            }
        });
    });
    /*==== Scroll Reveal Animation ====*/
    const elementsToAnimate = document.querySelectorAll(".animated");
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("go");
                observer.unobserve(entry.target);
            }
        });
    }
    const observer = new IntersectionObserver(handleIntersection, options);
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
})();