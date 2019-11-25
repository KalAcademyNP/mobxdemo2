import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import Home from './src/Home';
import stores from './src/stores';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider {...stores}>
        <Home />
      </Provider>
    );
  }
}
