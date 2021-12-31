import './styles/style.css';
import initialContent from './initial_content.js';
import { navbar, selectTab } from './navbar';
import clear from './clear';
import home from './home';
import menu from './menu';
import contact from './contact';

initialContent();

// Home tab
let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  selectTab('home');
  clear();
  home();
};

// Menu tab
let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  selectTab('menu');
  clear();
  menu();
}

// Contact tab
let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  selectTab('contact');
  clear();
  contact();
}
