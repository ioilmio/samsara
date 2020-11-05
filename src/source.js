import './style.css';
import webpack from './assets/webpack.png';
import createDiv from './createDiv';
import createBackgroundImage from './background_image';


function init() {
  createDiv('World');
  createBackgroundImage({ webpack });
}
init();