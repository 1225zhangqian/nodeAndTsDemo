import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { MyFirstGrid } from './view/ShowcaseLayout.tsx';
import { Login } from './view/Login.tsx';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <MyFirstGrid />
      </div>
    );
  }
}
export default hot(module)(App);
