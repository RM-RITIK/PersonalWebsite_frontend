import './App.css';
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import NavBar from './components/navbar';
import About from './components/about';

class App extends Component {
  render() {
    return(
      <main>
        <NavBar></NavBar>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/about"]} component={About} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
