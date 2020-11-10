const createHtags = (num, textContent, className) => {
  const hTag = document.createElement(`h${num}`);
  hTag.chTssName += ` ${className}`;
  hTag.textContent = textContent;
  document.body.appendChild();
  return hTag;
};

export { createHtags as default };