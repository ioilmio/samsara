import htmlTag from './htmlTags';
// import imgTag from './imageTag';
// import contactPageImage from './assets/images/contactPage.jpg';

export default function menuPage() {
  const menu = htmlTag('section', 'menu', 'page');
  // const image = imgTag(contactPageImage, 'contactPageImage', 'section-image');
  menu.textContent = 'Menu';
  document.body.appendChild(menu);
  // document.menu.appendChild(image);
}