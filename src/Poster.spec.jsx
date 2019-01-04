import React from 'react';
import {
  shallow,
} from './enzyme.js';
import PosterInjector from 'inject-loader!./Poster.jsx';

describe('Poster', () => {
  let subject;

  beforeEach(() => {
    let generateDots = (...args) => `generateDots(${args.map(JSON.stringify).join(',')})`;

    let Poster = PosterInjector({
      './Poster.generateDots.jsx': generateDots,
    }).default;

    subject = shallow(
      <Poster
        maxAge={123}
        name="Herp McDerpson"
      />
    );
  });

  describe('the name', () => {
    let name;

    beforeEach(() => {
      name = () => subject.children().at(0);
    });

    it('contains the name', () => {
      expect(name()).toHaveText('Herp McDerpson');
    });

    it('is centered', () => {
      expect(name()).toHaveStyle('textAlign', 'center');
    });

    it('has 32px font', () => {
      expect(name()).toHaveStyle('fontSize', '32px');
    });
  });

  describe('the dots', () => {
    let dots;

    beforeEach(() => {
      dots = () => subject.children().at(1);
    });
    
    it('contains the result of generateDots', () => {
      expect(dots()).toHaveText('generateDots(123)');
    });
  });
});