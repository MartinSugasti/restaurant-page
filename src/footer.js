export default function footer() {
  let footer = document.createElement('footer');
  let footerText = document.createElement('p');
  footerText.innerHTML = 'For reservations call +34 696 924 288'
  footer.appendChild(footerText);
  let body = document.querySelector('body');
  body.appendChild(footer);
};
