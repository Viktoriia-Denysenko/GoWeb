const masthead = document.querySelector('.masthead__wrapper');
let scrollPos;

export default function fixHeader() {
  scrollPos = masthead.offsetHeight;
  let scrolled = window.scrollY;

  if (scrolled >= scrollPos) {
    masthead.classList.add('active');
  } else {
    masthead.classList.remove('active');
  }
}

window.onscroll = function () {
  fixHeader();
};
