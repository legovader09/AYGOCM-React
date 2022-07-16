import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className }) => (
  <span className={className} dangerouslySetInnerHTML={{ __html: children }} />
);

Text.defaultProps = { className: '' };
Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;
