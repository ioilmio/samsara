import htmlTag from './htmlTags';

export default function divTag(textContent, klass) {
  const div = htmlTag('div');
  div.className += ` ${klass}`;
  div.textContent = textContent;
  return div;
}
