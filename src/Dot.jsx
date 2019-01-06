import PropTypes from 'prop-types';
import React from 'react';

const Dot = ({
  crossedOut,
}) => (
  <div
    style={{
      display: 'inline-block',
      fontFamily: 'monospace',
      position: 'relative',
    }}
  >
    <div>
      {'\u2022'}
    </div>
    {
      crossedOut &&
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        {'\u00D7'}
      </div>
    }
  </div>
);

Dot.propTypes = {
  crossedOut: PropTypes.bool,
};

Dot.defaultProps = {
  crossedOut: false,
};

export default Dot;
