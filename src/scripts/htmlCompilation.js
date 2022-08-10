import header from '../partials/header.html';
import about from '../partials/about.html';
import cases from '../partials/cases.html';
import blog from '../partials/blog.html';
import team from '../partials/team.html';
import contacts from '../partials/contacts.html';
import footer from '../partials/footer.html';

const markup = [
  header,
  '<main>',
  about,
  cases,
  blog,
  team,
  contacts,
  '</main>',
  footer,
];

const body = document.querySelector('body');

body.innerHTML = markup.join('');
