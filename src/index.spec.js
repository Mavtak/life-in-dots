import indexLoader from 'inject-loader!./index.js';

describe('index', () => {
  let index;
  let init;
  
  beforeEach(() => {
    init = jasmine.createSpy('init');

    index = indexLoader({
      './init.jsx': init,
    }).default;
  });

  it('includes babel', () => {
    expect(indexLoader.validDependencies).toEqual(jasmine.arrayContaining([
      '@babel/polyfill',
    ]));
  });

  it('calls init', () => {
    expect(init).toHaveBeenCalledWith();
  });

  it('exports nothing', () => {
    expect(index).toBeUndefined();
  });
});
