import 'lightbox2';

import './styles/index.scss';
import './scripts/html-chunked';

import scrollFunction from './scripts/fixedHeader';

window.onscroll = function () {
  scrollFunction();
};
