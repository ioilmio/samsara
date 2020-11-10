import htmlTag from './htmlTags';
import imgTag from './imageTag';
import LogoSm from './assets/samsara-logo/md-black.svg';
import MobileIcon from './assets/font/mobile-alt-solid.svg';
import WaIcon from './assets/font/whatsapp-brands.svg';
import IgIcon from './assets/font/instagram-brands.svg';


const contactPage = () => {
  const main = document.getElementById('main');
  const contact = htmlTag('section', 'contact', 'page');
  const contactBox = htmlTag('div', 'hero-logo-box', 'hero-box');
  const imgWrapper = htmlTag('div', 'imgWrapper');
  const contactLogo = imgTag(LogoSm, 'hero-logo-contact', 'hero-box logo');
  const contactText = htmlTag('h2', 'hero-logo-text', 'hero-box text');
  const contactText1 = htmlTag('h2', 'hero-logo-text1', 'hero-box text');
  const contactText2 = htmlTag('h2', 'hero-logo-text2', 'hero-box text');
  const contactIconMobile = imgTag(MobileIcon, 'mobile-icon', 'fas fa-mobile-alt');
  const contactIconInstagram = imgTag(WaIcon, 'mobile-icon', 'fab fa-instagram');
  const contactIconWhatsapp = imgTag(IgIcon, 'mobile-icon', 'fab fa-whatsapp');
  contactText.textContent = ('Call us on 555-5555');
  contactText1.textContent = ('Send us a message');
  contactText2.textContent = ('Find us on social media');

  main.appendChild(contact);
  contact.appendChild(contactBox);

  contactBox.appendChild(imgWrapper);
  contactBox.appendChild(contactText);
  contactText.appendChild(contactIconMobile);
  contactText1.appendChild(contactIconInstagram);
  contactText2.appendChild(contactIconWhatsapp);
  imgWrapper.appendChild(contactLogo);
  contactBox.appendChild(contactText1);
  contactBox.appendChild(contactText2);
};

export { contactPage as default };