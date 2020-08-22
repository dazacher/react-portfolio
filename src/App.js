import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import projects from "./project.json"
import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

class App extends Component {

  // Setting this.state.projects to the projects json array
  state = {
    projects
  };

  componentDidMount(){
    AOS.init();
  }
  render() {
    return (
  
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" render={(props) => <Portfolio {...props} projects={this.state.projects} />} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
          <Skills />
        </Router>
     
    );
  };
};
export default App;

