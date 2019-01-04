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
      &#8226;
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
        &#215;
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
