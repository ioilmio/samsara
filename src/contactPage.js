import htmlTag from './htmlTags';
// import imgTag from './imageTag';
// import contactPageImage from './assets/images/contactPage.jpg';

export default function contactPage() {
  const contact = htmlTag('section', 'contact', 'page');
  // const image = imgTag(contactPageImage, 'contactPageImage', 'section-image');

  contact.textContent = 'contact';
  document.body.appendChild(contact);
  // document.contact.appendChild(image);
}