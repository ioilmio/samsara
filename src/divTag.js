import htmlTag from './htmlTags';

export default function divTag(id, klass, textContent = '') {
  const div = htmlTag('div');
  div.textContent = textContent;
  div.id = id;
  div.className += ` ${klass}`;
  return div;
}
