const masthead = document.querySelector('.masthead__wrapper');
let scrollPos;

export default function scrollFunction() {
  scrollPos = masthead.offsetHeight;
  let scrolled = window.scrollY;
  console.log(scrollPos);
  console.log(scrolled);

  if (scrolled >= scrollPos) {
    masthead.classList.add('active');
  } else {
    masthead.classList.remove('active');
  }
}
