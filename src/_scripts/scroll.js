import {doc} from "./namespace";
import { showSeaContent, hideSeaContent } from './sea'
let scrollPosition = -100;

function scrollBottom() {
  if ( scrollPosition > -200 ) {
    scrollPosition -= 100;
    doc.pageWrapper.style.top = scrollPosition + 'vh';
    showSeaContent();
  }
}

function scrollTop() {
  if (scrollPosition < 0) {
    scrollPosition += 100;
    doc.pageWrapper.style.top = scrollPosition + 'vh';
    hideSeaContent();
  }
}

function toggleScroll( condition ) {
  condition
    ? scrollBottom()
    : scrollTop()
}

export { toggleScroll, scrollTop, scrollBottom }
