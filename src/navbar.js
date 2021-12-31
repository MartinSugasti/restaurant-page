function navbar() {
  let content = document.querySelector('body');
  let nav = document.createElement('nav');

  let home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';
  nav.appendChild(home);

  let menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  nav.appendChild(menu);

  let contact = document.createElement('button');
  contact.innerHTML = 'Contact';
  contact.id = 'contact';
  nav.appendChild(contact);

  content.appendChild(nav);
};

function selectTab(tabId) {
  let homeButton = document.getElementById('home');
  homeButton.classList.remove('selected');
  let menuButton = document.getElementById('menu');
  menuButton.classList.remove('selected');
  let contactButton = document.getElementById('contact');
  contactButton.classList.remove('selected');

  let selectedButton = document.getElementById(tabId);
  selectedButton.classList.add('selected');
}

export { navbar, selectTab };
