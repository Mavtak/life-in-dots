import windowFromImport from './window.js';

describe('window', () => {
  it('is the global window object', () => {
    expect(windowFromImport).toBe(window);
  });
});
