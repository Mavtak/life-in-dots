import {
  shallow,
} from './enzyme.js';
import Age from './Age.jsx';
import Dot from './Dot.jsx';
import generateDots from './Poster.generateDots.jsx';

describe('generateDots', () => {
  it('returns ages 0 through the provided age, separated by 52 dots', () => {
    let result = generateDots({
      birthday: '2000-01-02',
      maxAge: 3,
      now:"2001-02-03",
    });
    let text = transformToText(result);

    expect(text).toEqual([
      '0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      '1xxxx................................................',
      '2....................................................',
    ]);
  });

  it('sets keys', () => {
    let result = generateDots({
      maxAge: 3
    });

    expect(result[0].key).toBe('age 0');
    expect(result[1].key).toBe('week 0');
    expect(result[2].key).toBe('week 1');
    expect(result[52].key).toBe('week 51');
    expect(result[53].key).toBe('age 1');
    expect(result[54].key).toBe('week 52');
    expect(result[55].key).toBe('week 53');
  });
});

function transformToText(dots) {
  let text = [];

  dots.forEach(x => {
    if (x.type === Age) {
      text.push('' + x.props.value);
      return;
    }

    if (x.type === Dot) {
      if (x.props.crossedOut) {
        text[text.length - 1] += 'x';
      } else {
        text[text.length - 1] += '.';
      }
      return;
    }

    throw new Error('invalid type');
  });

  return text;
}
