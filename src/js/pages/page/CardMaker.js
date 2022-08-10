import React from 'react';
import * as serviceWorkerRegistration from '../../../serviceWorkerRegistration';
import '../../../css/cardmaker.css';

const images = require.context('../../../assets', true);

const CardMaker = () => {
  serviceWorkerRegistration.register();
  document.title = 'Card Maker | Anime Yu-Gi-Oh! Card Maker';
  return (
    <div className="container">
      <div className="content row">
        <div className="child col-sm-4">
          <img id="Template" src={images('./Templates/1-Normal.png')} alt="Card" width="400" height="583" />
          <img id="Level" src={images('./Levels/LVL/Level1.png')} alt="Card" width="400" height="30" />
        </div>
        <div className="child col-sm-8">
          <h1 className="title">Anime Yu-Gi-Oh! Card Maker</h1>
          <h3 className="subtitle">Web Edition</h3>
        </div>
      </div>
    </div>
  );
};

export default CardMaker;
