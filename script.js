'use strict';

// scrollY navbar
document.addEventListener('scroll', () => {
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;

    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

// reponsive navbar handler
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('.navbar__menu');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle("on");
});

// hendle scrolling navbar menu
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    };
    navbarMenu.classList.remove('on');
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
})




//project
const workBtnContainer = document.querySelector(".work__btn");
const projectContainer = document.querySelector(".work__project");
const projects = document.querySelectorAll('.project__list.main');

workBtnContainer.addEventListener("click", (e) => {
    const filter = e.target.dataset.filter;
    if (filter == null) {
        return;
    }
    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projectContainer.classList.remove('anim-out');
        projects.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
    }, 300);

})