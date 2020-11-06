import divTag from './divTag';

export default function imgTag(source, id, klass) {
  const img = document.createElement('img');
  img.setAttribute('src', source);
  img.id = id;
  img.className += ` ${klass}`;
  divTag('').appendChild(img);
  return img;
}