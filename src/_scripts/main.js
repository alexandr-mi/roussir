const scrollButton = document.querySelector('.button-more');
const pageWrapper = document.querySelector('.pageWrapper');
const seaContentLeft = document.querySelector('.sea__content-left');
const seaContentCenter = document.querySelector('.sea__content-center');
const seaContentRight = document.querySelector('.sea__content-right');

function toggleScroll( condition ) {
  if ( condition ) {
    scrollToSea();
  } else {
    scrollToMountain();
  }
}

function scrollToSea() {
  pageWrapper.classList.add('toSea');
  showSeaContent();
}
function scrollToMountain() {
  pageWrapper.classList.remove('toSea');
  hideSeaContent();
}

function showSeaContent() {
  setTimeout(() => {
    seaContentLeft.classList.add('show');
  }, 500);
  setTimeout(() => {
    seaContentCenter.classList.add('show');
  }, 700);
  setTimeout(() => {
    seaContentRight.classList.add('show');
  }, 900);
}

function hideSeaContent() {
  seaContentLeft.classList.remove('show');
  seaContentCenter.classList.remove('show');
  seaContentRight.classList.remove('show');
}


scrollButton.addEventListener('click', () => {
  scrollToSea();
});

window.addEventListener('mousewheel', (e) => {
  toggleScroll( e.deltaY > 0 );
});


// for touch devices
let touchStart, touchEnd;

window.addEventListener('touchstart', (e) => {
  touchStart = e.changedTouches[0].screenY;
});

window.addEventListener('touchmove', (e) => {
  touchEnd = e.changedTouches[0].screenY;
  toggleScroll( touchStart > touchEnd );
});
