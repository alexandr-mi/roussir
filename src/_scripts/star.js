import { doc } from './namespace'
import { randomInteger } from './random'

const stars = [];


function setIntervalForFallStar( star, interval ) {
  setInterval(() => {
    let top = randomInteger(0, 50);
    let left = randomInteger(0, 100);
    let deg = randomInteger(20, 140);
    let length = randomInteger(500, 800);
    moveStar( star, top, left,  deg, length);
  }, interval);
}
function createStar(speed) {
  let star = document.createElement('div');
  star.classList.add('space__star');

  star.setAttribute('data-speed', speed);
  star.style.transition = `width ${speed/1000}s linear, opacity 0.8s`;
  stars.push(star);

  doc.space__bgStars.appendChild(star);
}

function moveStar( star, top, left, deg, length ) {
  star.style.top = `${top}%`;
  star.style.left = `${left}%`;
  star.style.transform = `rotate(${deg}deg)`;
  star.style.opacity = '1';
  setTimeout(() => {
    star.style.width = `${length}px`;
  }, 0);

  setTimeout(() => {
    star.style.opacity = '0';
  }, star.dataset.speed);

  setTimeout(() => {

    star.style.width = `0px`;
  }, star.dataset.speed*2)

}
export {stars, createStar, moveStar, setIntervalForFallStar}
