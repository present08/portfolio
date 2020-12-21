//benner slider

const slide = document.querySelectorAll('.slide');
const txt = document.querySelectorAll('.slide_txt');
const bg = document.querySelectorAll('.slide_bg');

let i = 0;
setInterval(function () {
  i++;
  txt[i].classList.add('active');
  bg[i].classList.add('active');
  txt[i - 1].classList.remove('active');
  bg[i - 1].classList.remove('active');
  if (i == 6) {
    i = 0;
    txt[0].classList.add('active');
    bg[0].classList.add('active');
    txt[6].classList.remove('active');
    bg[6].classList.remove('active');
  }
}, 3000);
