import htmlTag from './htmlTags';
import imgTag from './imageTag';
import pasta from './assets/images/menu-pasta.jpg';
import drink from './assets/images/menu-drink.jpg';
import fruits from './assets/images/menu-fruits.jpg';
import salad from './assets/images/menu-salad.jpg';
import steak from './assets/images/menu-steak.jpg';
import sweet from './assets/images/4.jpg';

const menuPage = () => {
  const main = document.getElementById('main');
  const menuSection = htmlTag('section', 'menu', 'page');
  const grid = htmlTag('div', 'menu-grid', 'page');
  const pastaImage = imgTag(pasta, 'pasta-image', 'box-image');
  const saladImage = imgTag(salad, 'salad-image', 'box-image');
  const drinkImage = imgTag(drink, 'drink-image', 'box-image');
  const fruitsImage = imgTag(fruits, 'fruits-image', 'box-image');
  const steakImage = imgTag(steak, 'steak-image', 'box-image');
  const sweetImage = imgTag(sweet, 'sweet-image', 'box-image');
  const pastaBox = htmlTag('div', 'pastaBox', 'grid-box', 'delicious pasta');
  const saladBox = htmlTag('div', 'saladBox', 'grid-box', 'crunchy veg');
  const drinkBox = htmlTag('div', 'drinkBox', 'grid-box', 'great cocktails');
  const fruitBox = htmlTag('div', 'fruitBox', 'grid-box', 'fresh fruits');
  const steakBox = htmlTag('div', 'steakBox', 'grid-box', 'yummy steaks');
  const sweetBox = htmlTag('div', 'sweetBox', 'grid-box', 'sweetest sweets');

  main.appendChild(menuSection);
  menuSection.appendChild(grid);
  saladBox.appendChild(saladImage);
  pastaBox.appendChild(pastaImage);
  drinkBox.appendChild(drinkImage);
  sweetBox.appendChild(sweetImage);
  fruitBox.appendChild(fruitsImage);
  steakBox.appendChild(steakImage);
  grid.appendChild(pastaBox);
  grid.appendChild(saladBox);
  grid.appendChild(drinkBox);
  grid.appendChild(sweetBox);
  grid.appendChild(fruitBox);
  grid.appendChild(steakBox);
};

export { menuPage as default };