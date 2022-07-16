import React from 'react';
import PropTypes from 'prop-types';
import '../../css/rounded-box.css';

const RoundedBox = ({ children, colour }) => (
  <div className={`rounded-box rb-${colour}`}>
    {children}
  </div>
);

RoundedBox.defaultProps = { colour: 'blue' };
RoundedBox.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string,
};

export default RoundedBox;
