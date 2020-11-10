import xswhite from './assets/samsara-logo/xs-white.png';
import htmlTag from './htmlTags';
import imgTag from './imageTag';

const nav = htmlTag('nav', 'nav', 'navbar');
const tabs = htmlTag('ul', 'top-menu', 'tabs');
const homeTab = htmlTag('li', 'homeTab', 'top-menu-item');
const homeTabLogo = imgTag(xswhite, 'homeTabLogo', 'top-menu-item');
const contactTab = htmlTag('li', 'contactTab', 'top-menu-item');
const menuTab = htmlTag('li', 'menuTab', 'top-menu-item');

const navBar = () => {
  menuTab.textContent = 'MENU';
  contactTab.textContent = 'CONTACT';
  document.body.appendChild(nav);
  nav.appendChild(tabs);
  tabs.appendChild(menuTab);
  tabs.appendChild(homeTab);
  homeTab.appendChild(homeTabLogo);
  tabs.appendChild(contactTab);
};

export { navBar as default };
