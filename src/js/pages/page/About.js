import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import '../../../css/about.css';

const About = () => {
  document.title = 'About | Anime Yu-Gi-Oh! Card Maker';
  return (
    <div className="container">
      <div className="content iframe-host">
        <IframeResizer className="iframe fadeIn" log={process.env.NODE_ENV !== 'production'} heightCalculationMethod="lowestElement" title="About Info" src="https://animeygocardmaker.netlify.app/html/copyrightinfo" />
      </div>
    </div>
  );
};

export default About;
