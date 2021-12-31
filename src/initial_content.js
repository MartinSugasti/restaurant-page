import { navbar, selectTab } from './navbar';
import footer from './footer';
import home from './home';

export default function initialContent() {
  navbar();
  selectTab('home');
  home();
  footer();
}
