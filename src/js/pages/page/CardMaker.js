import React from 'react';
import * as serviceWorkerRegistration from '../../../serviceWorkerRegistration';

const CardMaker = () => {
  serviceWorkerRegistration.register();
  document.title = 'Card Maker | Anime Yu-Gi-Oh! Card Maker';
  return (
    <div>Card Maker</div>
  );
};

export default CardMaker;
