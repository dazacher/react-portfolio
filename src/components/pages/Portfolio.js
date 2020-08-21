import React from "react";
import PortfolioCard from "../portfoliocard/PortfolioCard";
import Wrapper from "../wrapper/Wrapper"
import Row from "react-bootstrap/Row";
import "./Portfolio.css"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Portfolio(props) {

  return (
    < Wrapper className="wrapper" >
    
      <Row className="row">
          {
            props.projects.map(project => (
              <PortfolioCard
                key={project.id}
                image={project.image}
                altTag={project.altTag}
                cardTitle={project.cardTitle}
                cardText={project.cardText}
                cardApplications={project.cardApplications}
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