import createDiv from './createDiv';

export default function createBackgroundImage(source) {
  const box = document.createElement('img');
  // console.log(box);
  box.setAttribute('src', source);
  createDiv('alert').appendChild(box);
  return box;
}