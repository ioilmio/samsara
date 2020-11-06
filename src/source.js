import './style.css';
import navBar from './navbar';
import mainSection from './mainSection';
// import menuPage from './menuPage';
import aboutPage from './aboutPage';
// import contactPage from './contactPage';


function init() {
  const navbar = navBar();
  const main = mainSection();
  // const menu = menuPage();
  document.body.appendChild(main);
  const about = aboutPage();
  // const contact = contactPage();
  document.body.appendChild(navbar);
  // document.main.appendChild(menu);
  const content = document.getElementById('main');
  content.appendChild(about);
  // document.main.appendChild(about);
  // document.main.appendChild(contact);
}
init();