import PropTypes from 'prop-types';
import React from 'react';

const Age = ({
  value,
}) => (
  <div
    style={{
      display: 'inline-block',
      fontFamily: 'monospace',
    }}
  >
    {value}
  </div>
);

Age.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Age;
