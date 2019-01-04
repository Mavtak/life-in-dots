import PropTypes from 'prop-types';
import React from 'react';
import generateDots from './Poster.generateDots.jsx';

const Poster = ({
  maxAge,
  name,
}) => (
  <div>
    <div
      style={{
        textAlign: 'center',
        fontSize: '32px',
      }}
    >
      {name}
    </div>
    <div>
      {
        generateDots(maxAge)
      }
    </div>
  </div>
);

Poster.propTypes = {
  maxAge: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Poster;
