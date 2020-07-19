import React, { Component } from "react";
import NavBar from "../navbar/NavBar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Resume") {
        return <Resume />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
      <Wrapper>
      {this.state.projects.map(project => (
        <Portfolio
          id={project.id}
          image={project.image}
          altTag={project.altTag}
          cardTitle={project.cardTitle}
          cardText={project.cardText}
          anchorDeployed={project.anchorDeployed}
          anchorGitHub={project.anchorGitHub}
        />
      ))}
    </Wrapper>
    );
  }
}

export default PortfolioContainer;