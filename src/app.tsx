import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { MyFirstGrid } from './view/ShowcaseLayout';
import { Login } from './view/Login';
import { Page } from './view/page';
import Iframe from './view/iframe';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/iframe">iframe</Link>
                </li>
                <li>
                  <Link to="/page">page</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/page">
                <Page />
              </Route>
              <Route path="/iframe">
                <Iframe />
              </Route>
              <Route path="/">
                <MyFirstGrid />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default hot(module)(App);
