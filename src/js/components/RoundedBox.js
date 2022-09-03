import React from 'react';
import PropTypes from 'prop-types';

const RoundedBox = ({ children, colour }) => (
  <div className={`rounded-box--${colour}`}>
    {children}
  </div>
);

RoundedBox.defaultProps = { colour: 'blue' };
RoundedBox.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
};

export default RoundedBox;
