const masthead = document.querySelector('.masthead__wrapper');
let scrollPos;

export default function scrollFunction() {
  scrollPos = masthead.offsetHeight;
  let scrolled = window.scrollY;

  if (scrolled >= scrollPos) {
    masthead.classList.add('active');
  } else {
    masthead.classList.remove('active');
  }
}

window.onscroll = function () {
  scrollFunction();
};
