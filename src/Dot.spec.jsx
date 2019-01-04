import React from 'react';
import {
  shallow,
} from './enzyme.js';
import Dot from './Dot.jsx';

describe('Dot', () => {
  let subject;
  
  beforeEach(() => {
    subject = shallow(
      <Dot />
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

  it('renders a bullet point', () => {
    expect(subject).toHaveText('\u2022');
  });
});
