import React from 'react';
import initLoader from 'inject-loader!./init.jsx';

describe('init', () => {
  let App;
  let ReactDOM;
  let init;
  let window;

  beforeEach(() => {
    App = () => (
      <div>
        the app
      </div>
    );

    ReactDOM = jasmine.createSpyObj('ReactDOM', [
      'render',
    ]);

    window = {
      document: jasmine.createSpyObj('window', [
        'createElement',
      ]),
    };
    window.document.createElement.and.returnValue('some div');
    window.document.body = jasmine.createSpyObj('body', [
      'appendChild',
    ]);

    init = initLoader({
      'react-dom': ReactDOM,
      './App.jsx': App,
      './window.js': window,
    }).default;

    init();
  });

  it('creates a root element', () => {
    expect(window.document.createElement).toHaveBeenCalledWith('div');
  });

  it('appends the element to the body', () => {
    expect(window.document.body.appendChild).toHaveBeenCalledWith('some div');
  });

  it('calls ReactDOM.render with the App and the root element', () => {
    expect();
  });
});
