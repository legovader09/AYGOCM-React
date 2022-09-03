import React, { useState } from 'react';
import IframeResizer from 'iframe-resizer-react';

const About = () => {
  const [hasLoaded, setLoaded] = useState(false);
  document.title = 'About | Anime Yu-Gi-Oh! Card Maker';
  return (
    <div className="container">
      <div className="content iframe-host">
        <IframeResizer className={`iframe ${hasLoaded ? 'fadeIn' : ''}`} onLoad={() => setLoaded(true)} log={process.env.NODE_ENV !== 'production'} heightCalculationMethod="lowestElement" title="About Info" src="https://animeygocardmaker.netlify.app/html/copyrightinfo" />
      </div>
    </div>
  );
};

export default About;
