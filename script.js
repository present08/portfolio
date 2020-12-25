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

//scroll
const about_h1 = document.querySelector('.aboutMe');
const about_ava = document.querySelector('.about__avatar');
const about_con = document.querySelector('.about__container--main');

window.addEventListener('scroll', (e) => {
  let winY = window.scrollY;
  if (winY >= 600) {
    about_h1.style.top = '50px';
    about_h1.style.opacity = 1;
  }
  if (winY >= 750) {
    about_ava.style.top = '200px';
    about_ava.style.opacity = 1;
  }
  if (winY >= 900) {
    about_con.style.top = '0';
    about_con.style.opacity = 1;
  }
  console.log(winY);
});

// reponsive navbar handler
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('.navbar__menu');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('on');
});

// hendle scrolling navbar menu
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('on');
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
});

//project
const workBtnContainer = document.querySelector('.work__btn');
const projectContainer = document.querySelector('.work__project');
const projects = document.querySelectorAll('.project__list.main');

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  if (filter == null) {
    return;
  }
  //click project Btn
  const active = document.querySelector('.work__menu.active');
  active.classList.remove('active');
  e.target.classList.add('active');

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
});
