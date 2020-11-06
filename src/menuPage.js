import htmlTag from './htmlTags';
// import imgTag from './imageTag';
// import contactPageImage from './assets/images/contactPage.jpg';
// import samsaraLogoSm from './assets/images/samsara-logo/md-black.svg'
export default function menuPage() {
  const main = document.getElementById('main');
  const menuSection = htmlTag('section', 'menu', 'page');
  main.textContent = 'main';
  main.appendChild(menuSection);
}