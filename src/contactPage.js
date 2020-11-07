import htmlTag from './htmlTags';
import imgTag from './imageTag';
import LogoSm from './assets/samsara-logo/md-black.svg';


export default function contactPage() {
  const contact = htmlTag('section', 'contact', 'page');
  const contactBox = htmlTag('div', 'hero-logo-box', 'hero-box');
  const imgWrapper = htmlTag('div', 'imgWrapper');
  const contactLogo = imgTag(LogoSm, 'hero-logo-contact', 'hero-box logo');
  const contactText = htmlTag('h2', 'hero-logo-text', 'hero-box text');
  const contactText1 = htmlTag('h2', 'hero-logo-text1', 'hero-box text');
  const contactText2 = htmlTag('h2', 'hero-logo-text2', 'hero-box text');
  contactText.textContent = ('Id quae quisquam incidunt dolorum nihil perspiciatis quasi.');
  contactText1.textContent = ('Id quae quisquam incidunt dolorum nihil perspiciatis quasi.');
  contactText2.textContent = ('Id quae quisquam incidunt dolorum nihil perspiciatis quasi.');

  document.body.appendChild(contact);
  contact.appendChild(contactBox);

  contactBox.appendChild(imgWrapper);
  contactBox.appendChild(contactText);
  imgWrapper.appendChild(contactLogo);
  contactBox.appendChild(contactText1);
  contactBox.appendChild(contactText2);
}