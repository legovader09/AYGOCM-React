import React from 'react';
import PropTypes from 'prop-types';
import * as serviceWorkerRegistration from '../../../serviceWorkerRegistration';

require.context('../../../Fonts', true);
const images = require.context('../../../assets', true);

const CardMaker = ({ title }) => {
  serviceWorkerRegistration.register();
  document.title = `${title} | Anime Yu-Gi-Oh! Card Maker`;
  return (
    <div className="container">
      <div className="content row">
        <div id="card">
          <img id="template" src={images('./Templates/1-Normal.png')} alt="" />
          <img id="cardimage" src={images('./blank.png')} style={{ objectFit: 'cover' }} alt="" />
          <img id="lvlbar" src={images('./Levels/LVL/Level1.png')} alt="" />
          <img id="attribute" src={images('./Attribute/JAP/Earth.png')} alt="" />
          <input className="atkdeffield" id="ATKText" type="text" maxLength="5" placeholder="0" autoComplete="off" />
          <input className="atkdeffield" id="DEFText" type="text" maxLength="5" placeholder="0" autoComplete="off" />
        </div>
        <div className="child col-md-6">
          <h1 className="title">Anime Yu-Gi-Oh! Card Maker</h1>
          <h3 className="subtitle">Web Edition</h3>
        </div>
      </div>
    </div>
  );
};

export default CardMaker;

CardMaker.propTypes = {
  title: PropTypes.string.isRequired,
};
