import {doc} from "./namespace";

function showSeaContent() {
  setTimeout(() => {
    doc.seaContentLeft.classList.add('show');
  }, 500);
  setTimeout(() => {
    doc.seaContentCenter.classList.add('show');
  }, 700);
  setTimeout(() => {
    doc.seaContentRight.classList.add('show');
  }, 900);
}

function hideSeaContent() {
  doc.seaContentLeft.classList.remove('show');
  doc.seaContentCenter.classList.remove('show');
  doc.seaContentRight.classList.remove('show');
}

export { showSeaContent, hideSeaContent }
