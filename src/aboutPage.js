import htmlTag from './htmlTags';

const aboutPage = () => {
  const about = htmlTag('section', 'about', 'page');
  const aboutBox = htmlTag('div', 'about-box', 'about');
  const aboutText = htmlTag('h1', 'about-text', 'about');
  const aboutText1 = htmlTag('h1', 'about-text', 'about');
  const aboutText2 = htmlTag('h1', 'about-text', 'about');
  const main = document.getElementById('main');
  aboutText.textContent = 'Delicious plates';
  aboutText1.textContent = 'Cozy dining room';
  aboutText2.textContent = 'Supreme drinks';
  main.appendChild(about);
  about.appendChild(aboutBox);
  aboutBox.appendChild(aboutText);
  aboutBox.appendChild(aboutText1);
  aboutBox.appendChild(aboutText2);
};

export { aboutPage as default };