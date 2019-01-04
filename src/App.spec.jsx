import React from 'react';
import App from './App.jsx';
import {
  shallow,
} from './enzyme.js';
import Poster from './Poster.jsx';

describe('App', () => {
  let subject;

  beforeEach(() => {
    subject = shallow(
      <App />
    );
  });

  it('renders as a Poster', () => {
    expect(subject.type()).toBe(Poster);
  });

  describe('the Poster', () => {
    it('has the "maxAge" prop set to 90', () => {
      expect(subject).toHaveProp('maxAge', 90);
    });

    it('has the "name" prop set to "David"', () => {
      expect(subject).toHaveProp('name', 'David');
    });
  });
});
