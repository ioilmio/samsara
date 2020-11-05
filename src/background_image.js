import createDiv from './createDiv';

export default function createBackgroundImage(source) {
  const box = document.createElement('img');
  // console.log(box);
  box.setAttribute('src', source);
  createDiv('alerted').appendChild(box);
  return box;
}