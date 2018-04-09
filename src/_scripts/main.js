import { doc } from './namespace';
import { toggleScroll, scrollBottom, } from './scroll';
import { setTouchStart, setTouchEnd} from './touch';
import {stars, createStar, setIntervalForFallStar} from './star'

// scroll on all height to up or down
window.addEventListener('mousewheel', (e) => {
  toggleScroll( e.deltaY > 0 );
});

// scroll on all height to down on click button
doc.scrollButton.addEventListener('click', scrollBottom);


// for touch devices
window.addEventListener('touchstart', setTouchStart);
window.addEventListener('touchend', (e) => {
  setTouchEnd(e);
  toggleScroll( doc.touchStart > doc.touchEnd );
});

// stars fall animation
window.addEventListener('load', () => {
  createStar(300);
  createStar(400);
  createStar(250);

  setIntervalForFallStar( stars[0], 3000 );
  setIntervalForFallStar( stars[1], 5000 );
  setIntervalForFallStar( stars[2], 6000 );

});

