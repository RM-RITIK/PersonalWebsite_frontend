import './App.css';
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import NavBar from './components/navbar';
import About from './components/about';
import BlogList from './components/blog-list';
import ProjectList from './components/project-list';
import ExperienceList from './components/experience-list';

class App extends Component {
  render() {
    return(
      <main>
        <NavBar></NavBar>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/about"]} component={About} />
            <Route exact path="/blogs" component={BlogList} />
            <Route exact path="/projects" component = {ProjectList} />
            <Route exact path="/experiences" component={ExperienceList} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
