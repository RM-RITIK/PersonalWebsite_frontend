import './App.css';
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import NavBar from './components/navbar';
import About from './components/about';
import BlogList from './components/blog-list';
import ProjectList from './components/project-list';
import ExperienceList from './components/experience-list';
import SkillList from './components/skill-list';
import Contact from './components/contact';
import AdminLogin from './components/admin-login';
import ServiceList from './components/service-list';

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
            <Route exact path="/skills" component={SkillList} />
            <Route exact path="/hire-me" component={Contact} />
            <Route exact path="/admin-login" component={AdminLogin} />
            <Route exact path="/services" component={ServiceList} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
