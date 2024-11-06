import Home from './page/Home';
import CardMaker from './page/CardMaker';
import Download from './page/Download';
import About from './page/About';
import NotFound from './page/NotFound';

const allRoutes = [
  {
    key: 0,
    path: '/',
    element: Home,
    title: 'Home',
  },
  {
    key: 1,
    path: '/create',
    element: CardMaker,
    title: 'Create',
  },
  {
    key: 2,
    path: '/download',
    element: Download,
    title: 'Download',
  },
  {
    key: 3,
    path: '/about',
    element: About,
    title: 'About',
  },
  {
    key: -1,
    path: '*',
    element: NotFound,
    title: 'Not Found',
    hideFromNav: true,
  },
];

export {
  Home,
  CardMaker,
  About,
  NotFound,
  allRoutes,
};
