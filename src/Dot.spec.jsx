import React from 'react';
import {
  shallow,
} from './enzyme.js';
import Dot from './Dot.jsx';

describe('Dot', () => {
  let dotSymbol;
  let xSymbol;
  let subject;
  
  beforeEach(() => {
    dotSymbol = () => subject.children().at(0);

    xSymbol = () => subject.children().at(1);

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
  
  it('is positioned relatively', () => {
    expect(subject).toHaveStyle('position', 'relative');
  });

  describe('when "crossedOut" prop is true', () => {
    beforeEach(() => {
      subject.setProps({
        crossedOut: false,
      });
    });

    it('renders a bullet point', () => {
      expect(dotSymbol()).toHaveText('\u2219');
    });

    it('does not render an x symbol', () => {
      expect(xSymbol()).not.toExist();
    });
  });

  describe('when "crossedOut" prop is true', () => {
    beforeEach(() => {
      subject.setProps({
        crossedOut: true,
      });
    });

    it('renders a bullet point', () => {
      expect(dotSymbol()).toHaveText('\u2219');
    });
    
    it('renders a x symbol', () => {
      expect(xSymbol()).toHaveText('\u00D7');
    });

    it('positions the x sombol over the bullet', () => {
      expect(xSymbol()).toHaveStyle('position', 'absolute');
      expect(xSymbol()).toHaveStyle('top', 0);
      expect(xSymbol()).toHaveStyle('left', 0);
    });
  });
});
