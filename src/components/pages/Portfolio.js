import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/esm/Container";

function Portfolio(props) {
  return (
    <Container fluid className="text-center">
      <CardDeck>
            <Row className="text-center">
              <Card>
              <Card.Img variant="top" src={props.image} alt={props.altTag}/>
              <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                  {props.cardText}
                </Card.Text>
                <Button  href={props.anchorDeployed}>Deployed Website</Button><br></br><br></br>
                <Button  href={props.anchorGitHub}>GitHub</Button>
              </Card.Body>
            </Card>
          {/* <Card>
              <Card.Img variant="top" src={props.image} alt={props.altTag}/>
              <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                  {props.cardText}
                </Card.Text>
                <Button  href={props.anchorDeployed}>Go somewhere</Button>
                <Button  href={props.anchorGitHub}>Go somewhere</Button>
              </Card.Body>
            </Card>
          <Card>
              <Card.Img variant="top" src={props.image} alt={props.altTag}/>
              <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                  {props.cardText}
                </Card.Text>
                <Button  href={props.anchorDeployed}>Go somewhere</Button>
                <Button  href={props.anchorGitHub}>Go somewhere</Button>
              </Card.Body>
            </Card>
            </Row>
            <br></br>
            <Row>
        <Card>
              <Card.Img variant="top" src={props.image} alt={props.altTag}/>
              <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                  {props.cardText}
                </Card.Text>
                <Button  href={props.anchorDeployed}>Go somewhere</Button>
                <Button  href={props.anchorGitHub}>Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={props.image} alt={props.altTag}/>
              <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                  {props.cardText}
                </Card.Text>
                <Button  href={props.anchorDeployed}>Go somewhere</Button>
                <Button  href={props.anchorGitHub}>Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={props.image} alt={props.altTag}/>
              <Card.Body>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                  {props.cardText}
                </Card.Text>
                <Button  href={props.anchorDeployed}>Go somewhere</Button>
                <Button  href={props.anchorGitHub}>Go somewhere</Button>
              </Card.Body>
            </Card> */}
            </Row>
      </CardDeck>
    </Container >
  );
}

export default Portfolio;