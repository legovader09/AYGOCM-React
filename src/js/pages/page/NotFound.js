import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ title }) => {
  document.title = `${title} | Anime Yu-Gi-Oh! Card Maker`;
  return (
    <div>Not Found</div>
  );
};

export default NotFound;

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};
