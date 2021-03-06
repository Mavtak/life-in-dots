import moment from 'moment';
import React from 'react';
import Poster from './Poster.jsx';

class App extends React.Component {
  render() {
    return (
      <Poster
        birthday="1989-10-05"
        maxAge={90}
        now={moment()}
        name="David"
      />
    );
  }
}

export default App;
