import React from 'react';
import Age from './Age.jsx';
import Dot from './Dot.jsx';

export default function generateDots(maxAge) {
  var result = [...new Array(maxAge)].map((x, age) => ([
    (
      <Age
        value={age}
        key={`age ${age}`}
      />
    ),
    ...[...new Array(52)].map((x, week) => (
      <Dot
        key={`age ${age} week ${week}`}
      />
    ))
  ]));

  result = result.flat();

  return result;
}
