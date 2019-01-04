import moment from 'moment';
import React from 'react';
import Age from './Age.jsx';
import Dot from './Dot.jsx';

export default function generateDots({
  birthday,
  maxAge,
}) {
  birthday = moment(birthday);
  let weekNumber = 0;
  let result = [];

  while (true) {
    let beginningOfWeek = birthday.clone().add(weekNumber, 'weeks');
    let endOfWeek = beginningOfWeek.clone().add(1, 'weeks');
    let ageAtBeginningOfWeek = moment.duration(beginningOfWeek.diff(birthday)).years();
    let ageAtEndOfWeek = moment.duration(endOfWeek.diff(birthday)).years();

    if (ageAtEndOfWeek === maxAge) {
      return result;
    }

    if (birthday >= beginningOfWeek && birthday <= endOfWeek || ageAtBeginningOfWeek !== ageAtEndOfWeek) {
      result.push(
        <Age
          value={ageAtEndOfWeek}
          key={`age ${ageAtEndOfWeek}`}
        />
      );
    }

    result.push(
      <Dot
        key={`week ${weekNumber}`}
      />
    );

    weekNumber++;
  }
}