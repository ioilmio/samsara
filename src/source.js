// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
import './style.css';
import navBar from './navbar';
import mainSection from './mainSection';
import menuPage from './menuPage';
import aboutPage from './aboutPage';
import contactPage from './contactPage';


// topMenu.addEventListener('click', togglePage(e) =>
//   console.log(e.target))
//   ;


function init() {
  // const navbar =
  navBar();
  // const main =
  mainSection();
  // const menu =
  // menuPage();
  // document.body.appendChild(main);
  // const about =
  aboutPage();
  // const contact =
  // contactPage();
  // document.body.appendChild(navbar);
  // document.main.appendChild(menu);
  const main = document.getElementById('main');
  // main.appendChild(menu);
  // document.main.appendChild(about);
  // document.main.appendChild(contact);
  const topMenu = document.getElementById('top-menu');
  topMenu.addEventListener('click', (e) => {
    if (e.target.id === 'menuTab') {
      main.firstChild.remove();
      main.innerHtml = '';
      menuPage();
    }
    if (e.target.id === 'homeTabLogo') {
      main.firstChild.remove();
      main.innerHtml = '';
      aboutPage();
    }
    if (e.target.id === 'contactTab') {
      main.firstChild.remove();
      main.innerHtml = '';
      contactPage();
    }
  });
}

init();
