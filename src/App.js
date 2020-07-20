import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Container from "./components/container/Container"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import resume from "./components/pages/Dee_Ann_Scanniello_Resume_Web_Developer_Full_Stack.pdf"
import projects from "./project.json"
// import Wrapper from "./components/wrapper/Wrapper";

class App extends Component {

  // Setting this.state.projects to the projects json array
  state = {
    projects,
    resume
  };

  render() {
    return (
      <>
        <Router>
          <NavBar />

          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" render={(props) => <Portfolio {...props} projects={this.state.projects} />} />
          <Route exact path="/resume" render={(props1) => <Resume {...resume} resume={this.state.resume} />} />
          <Route exact path="/contact" component={Contact} />

        </Router>
        <Footer />
      </>
    );
  };
};
export default App;

