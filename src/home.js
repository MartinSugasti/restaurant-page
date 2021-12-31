export default function home() {
  let container = document.createElement('div');
  container.classList.add('container');

  let header = document.createElement('header');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Restaurant Rafa';
  header.appendChild(headline);
  container.appendChild(header);

  let tagline = document.createElement('p');
  tagline.innerHTML = 'Best tennis restaurant ever';
  header.appendChild(tagline);

  let body = document.querySelector('body');
  body.appendChild(container);
}
