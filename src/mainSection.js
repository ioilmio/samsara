import htmlTag from './htmlTags';

const mainSection = () => {
  const main = htmlTag('main', 'main', 'main');
  document.body.appendChild(main);
};

export { mainSection as default };