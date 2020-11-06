import htmlTag from './htmlTags';

export default function aboutPage() {
  const about = htmlTag('section', 'about', 'page');
  about.textContent = 'ABOUT';
  document.body.appendChild(about);
}