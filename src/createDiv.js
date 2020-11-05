export default function createDiv(textContent) {
  const div = document.createElement('div');
  div.textContent = textContent;
  document.body.appendChild(div);
  return div;
}
