export default function contact() {
  let container = document.createElement('div');
  container.classList.add('container');

  let header = document.createElement('header');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Conntac us!';
  header.appendChild(headline);
  container.appendChild(header);

  let tagline = document.createElement('p');
  tagline.innerHTML = '+ 34 696 924 288';
  header.appendChild(tagline);

  let body = document.querySelector('body');
  body.appendChild(container);
}
