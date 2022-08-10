import React from 'react';
import Home from './page/Home';
import CardMaker from './page/CardMaker';
import About from './page/About';
import NotFound from './page/NotFound';

const allRoutes = [
  {
    key: 0,
    path: '/',
    element: <Home />,
    title: 'Home',
  },
  {
    key: 1,
    path: '/cardmaker',
    element: <CardMaker />,
    title: 'Card Maker',
  },
  {
    key: 2,
    path: '/about',
    title: 'About',
    element: <About />,
  },
  {
    key: -1,
    path: '*',
    title: 'Not Found',
    element: <NotFound />,
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
