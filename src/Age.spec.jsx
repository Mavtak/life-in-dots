import React from 'react';
import {
  shallow,
} from './enzyme.js';
import Age from './Age.jsx';

describe('Age', () => {
  let subject;
  
  beforeEach(() => {
    subject = shallow(
      <Age
        value={12}
      />
    );
  });

  it('renders as a div', () => {
    expect(subject.type()).toBe('div');
  });

  it('is inline-block', () => {
    expect(subject).toHaveStyle('display', 'inline-block');
  });

  it('is monospace', () => {
    expect(subject).toHaveStyle('fontFamily', 'monospace');
  });

  it('renders the age', () => {
    expect(subject).toHaveText('12');
  });
});
