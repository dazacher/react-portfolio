import React from "react";
import PortfolioCard from "../portfoliocard/PortfolioCard";
// import NavBar from "../navbar/NavBar";
import Wrapper from "../wrapper/Wrapper"
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import "./Portfolio.css"

function Portfolio(props) {

  return (
    < Wrapper className="wrapper" >
    
      <Row className="row">
          {
            props.projects.map(project => (
              <PortfolioCard
                id={project.id}
                image={project.image}
                altTag={project.altTag}
                cardTitle={project.cardTitle}
                cardText={project.cardText}
                anchorDeployed={project.anchorDeployed}
                anchorGitHub={project.anchorGitHub}
              />
            ))
          }
      </Row>  
    </Wrapper >
  );
};

export default Portfolio; 