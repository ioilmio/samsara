
export default function imgTag(source, id, klass) {
  const img = document.createElement('img');
  img.setAttribute('src', source);
  img.id = id;
  img.className += ` ${klass}`;

  return img;
}