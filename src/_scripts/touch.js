import {doc} from "./namespace";

function setTouchStart(e) {
  doc.touchStart = e.changedTouches[0].screenY;
}

function setTouchEnd(e) {
  doc.touchEnd = e.changedTouches[0].screenY;
}

export { setTouchStart, setTouchEnd}
