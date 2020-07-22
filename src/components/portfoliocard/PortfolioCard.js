import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import CardDeck from "react-bootstrap/CardDeck";
// import Container from "react-bootstrap/esm/Container";
import "./PortfolioCard.css"
// import "../../assets/images/Eat-da-Burger"
// import Wrapper from "../wrapper/Wrapper"

const imagecontext=require.context("../../assets/images", true)

function PortfolioCard(props) {
  return (
         <Col sm={6} md={4}>
          <Card className="cardBody">
            <Card.Img responsive variant="top" src={imagecontext("./" + props.image)} alt={props.altTag} />
            <Card.Body  className="text">
              <Card.Title className="cardTitle">{props.cardTitle}</Card.Title>
              <Card.Text>
                {props.cardText}
              </Card.Text>
              <Row className="anchorRow">
              {/* <!-- Links to GitHub deployed website and github code --> */}
                <Col md={6} className="anchor">
                  <a id="anchor1" class="button" href={props.anchorDeployed} rel="noopener noreferrer"
                    target="_blank">Website</a>
                </Col>
                <Col md={6} className="anchor">
                  <a id="anchor2" class="button" href={props.anchorGitHub} rel="noopener noreferrer"
                    target="_blank">GitHub Code</a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default PortfolioCard;