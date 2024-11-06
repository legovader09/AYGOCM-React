import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

Text.defaultProps = { className: '' };
Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;
