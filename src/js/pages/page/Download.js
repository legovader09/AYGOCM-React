import React from 'react';
import PropTypes from 'prop-types';

const About = ({ title }) => {
  document.title = `${title} | Anime Yu-Gi-Oh! Card Maker`;
  return (
    <div className="container">
      <div className="content row text-align-center">
        <h1 style={{ padding: '2rem', fontWeight: 'bold', letterSpacing: '4px' }}>Download Hub</h1>
        <hr />
        <p>
          <b>Java Edition</b> (Windows, Mac, Linux)<b> | Mobile Edition</b> (Android)
        </p>
        <h4 className="text-align-left">
          What version should I choose?
        </h4>
        <ul className="text-align-left" style={{ paddingLeft: '3rem' }}>
          <li>
            Generally, the recommended version is the <b>Java Edition</b>.
          </li>
          <li>
            The <b>Standard Edition</b> is still available but in most cases should not be used.
          </li>
          <li>
            If you have an Android phone such as a <b>Samsung, HTC, Motorola</b>, etc.{' '}
            with Android version <b>4.4</b>{' '}
            or newer then you may want to try out the <b>Mobile Edition</b>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;

About.propTypes = {
  title: PropTypes.string.isRequired,
};
