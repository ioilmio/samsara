import htmlTag from './htmlTags';
import imgTag from './imageTag';
import LogoSm from './assets/samsara-logo/sm-black.svg';


export default function contactPage() {
  const contact = htmlTag('section', 'contact', 'page');
  const heroLogo = imgTag(LogoSm, 'hero-logo-contact', 'hero-box logo');
  const heroBox = htmlTag('div', 'hero-logo-box', 'hero-box');
  const herotext = htmlTag('h2', 'hero-logo-text', 'hero-box text');
  herotext.textContent = ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae quisquam incidunt dolorum nihil perspiciatis quasi.');

  document.body.appendChild(contact);
  contact.appendChild(heroBox);
  heroBox.appendChild(heroLogo);
  heroBox.appendChild(herotext);
}