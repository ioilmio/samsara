import htmlTag from './htmlTags';

export default function mainSection() {
  const main = htmlTag('main', 'main', 'main');
  document.body.appendChild(main);
}