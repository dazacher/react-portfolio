import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/esm/Container";
import "./PortfolioCard.css"
// import Wrapper from "../wrapper/Wrapper"

function PortfolioCard(props) {
  return (
    // <Wrapper>
    // <Container fluid className="text-center">
    //   {/* <CardDeck> */}
    //   {/* <Row className="text-center"> */}
         <Col xl={4}>
          <Card className="cardBody">
            <Card.Img responsive variant="top" src={process.env.PUBLIC_URL + props.image} alt={props.altTag} />
            <Card.Body  className="text">
              <Card.Title>{props.cardTitle}</Card.Title>
              <Card.Text>
                {props.cardText}
              </Card.Text>
              <Row>
              {/* <!-- Links to GitHub deployed website and github code --> */}
                <Col md={6} className="anchor">
                  <a id="anchor1" class="button" href={props.anchorDeployed}
                    target="_blank">Website</a>
                </Col>
                <Col md={6} className="anchor">
                  <a id="anchor2" class="button" href={props.anchorGitHub}
                    target="_blank">GitHub Code</a>
                </Col>
              </Row>
              <br></br><br></br>
            </Card.Body>
          </Card>
        </Col>
    //   {/* </Row> */}
    // </Container >
    );
};

export default PortfolioCard;