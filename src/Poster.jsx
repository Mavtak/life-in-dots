import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import generateDots from './Poster.generateDots.jsx';

const Poster = ({
  birthday,
  maxAge,
  name,
  now,
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
          now,
        })
      }
    </div>
  </div>
);

Poster.propTypes = {
  birthday: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.string,
  ]).isRequired,
  maxAge: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  now: PropTypes.oneOfType([
    PropTypes.instanceOf(moment),
    PropTypes.string,
  ]).isRequired,
};

export default Poster;
