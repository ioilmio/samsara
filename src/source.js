import './style.css';
import navBar from './navbar';
import mainSection from './mainSection';
import menuPage from './menuPage';
import aboutPage from './aboutPage';
import contactPage from './contactPage';

function init() {
  navBar();
  mainSection();
  aboutPage();
  const main = document.getElementById('main');
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
