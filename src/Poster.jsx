import PropTypes from 'prop-types';
import React from 'react';
import generateDots from './Poster.generateDots.jsx';

const Poster = ({
  birthday,
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
        generateDots({
          birthday,
          maxAge,
        })
      }
    </div>
  </div>
);

Poster.propTypes = {
  birthday: PropTypes.string.isRequired,
  maxAge: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Poster;
