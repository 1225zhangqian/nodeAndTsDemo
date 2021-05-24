import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Login } from './view/Login.tsx';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World!</h1>
        <Login />
      </div>
    );
  }
}
export default hot(module)(App);
