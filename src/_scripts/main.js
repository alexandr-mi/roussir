import { doc } from './namespace';
import { toggleScroll, scrollBottom, } from './scroll';
import { setTouchStart, setTouchEnd} from './touch';
import { createStar } from './star'

window.addEventListener('mousewheel', (e) => {
  toggleScroll( e.deltaY > 0 );
});

doc.scrollButton.addEventListener('click', scrollBottom);


// for touch devices
window.addEventListener('touchstart', setTouchStart);

window.addEventListener('touchend', (e) => {
  setTouchEnd(e);
  toggleScroll( doc.touchStart > doc.touchEnd );
});
// it@github.com:alexandr-mi/roussir.git
