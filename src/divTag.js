import htmlTag from './htmlTags';

const divTag = (id, klass, textContent = '') => {
  const div = htmlTag('div');
  div.textContent = textContent;
  div.id = id;
  div.className += ` ${klass}`;
  return div;
};

export { divTag as default };