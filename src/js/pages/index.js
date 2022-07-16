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
  },
  {
    key: 1,
    path: '/cardmaker',
    element: <CardMaker />,
  },
  {
    key: 2,
    path: '/about',
    element: <About />,
  },
  {
    key: -1,
    path: '*',
    element: <NotFound />,
  },
];

export {
  Home,
  CardMaker,
  About,
  NotFound,
  allRoutes,
};
