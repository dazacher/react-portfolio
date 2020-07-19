import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/esm/Container";
import "./Portfolio.css"

function Portfolio(props) {
  return (
    <Container fluid className="text-center">
      {/* <CardDeck> */}
      <Row className="text-center">
        <Col xl={4}>
          <Card>
            <Card.Img responsive variant="top" src={props.image} alt={props.altTag} />
            <Card.Body h-75 className="text">
              <Card.Title>{props.cardTitle}</Card.Title>
              <Card.Text>
                {props.cardText}
              </Card.Text>
              <Row>
              {/* <!-- Links to GitHub deployed website and github code --> */}
                <Col md={6} className="anchor">
                  <a id="anchor1" class="button" href="https://dazacher.github.io/Trivia-With-Friends/"
                    target="_blank">Website</a>
                </Col>
                <Col md={6} className="anchor">
                  <a id="anchor2" class="button" href="https://github.com/dazacher/Trivia-With-Friends"
                    target="_blank">GitHub Code</a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
    // {/* //     <Card>
    //           <Card.Img variant="top" src={props.image} alt={props.altTag}/>
    //           <Card.Body>
    //             <Card.Title>{props.cardTitle}</Card.Title>
    //             <Card.Text>
    //               {props.cardText}
    //             </Card.Text>
    //             <Button  href={props.anchorDeployed}>Go somewhere</Button>
    //             <Button  href={props.anchorGitHub}>Go somewhere</Button>
    //           </Card.Body>
    //         </Card>
    //       <Card>
    //           <Card.Img variant="top" src={props.image} alt={props.altTag}/>
    //           <Card.Body>
    //             <Card.Title>{props.cardTitle}</Card.Title>
    //             <Card.Text>
    //               {props.cardText}
    //             </Card.Text>
    //             <Button  href={props.anchorDeployed}>Go somewhere</Button>
    //             <Button  href={props.anchorGitHub}>Go somewhere</Button>
    //           </Card.Body>
    //         </Card>
    //         </Row> */}
  // {/* //         <br></br>
    //         <Row>
    //     <Card>
    //           <Card.Img variant="top" src={props.image} alt={props.altTag}/>
    //           <Card.Body>
    //             <Card.Title>{props.cardTitle}</Card.Title>
    //             <Card.Text>
    //               {props.cardText}
    //             </Card.Text>
    //             <Button  href={props.anchorDeployed}>Go somewhere</Button>
    //             <Button  href={props.anchorGitHub}>Go somewhere</Button>
    //           </Card.Body>
    //         </Card>
    //         <Card>
    //           <Card.Img variant="top" src={props.image} alt={props.altTag}/>
    //           <Card.Body>
    //             <Card.Title>{props.cardTitle}</Card.Title>
    //             <Card.Text>
    //               {props.cardText}
    //             </Card.Text>
    //             <Button  href={props.anchorDeployed}>Go somewhere</Button>
    //             <Button  href={props.anchorGitHub}>Go somewhere</Button>
    //           </Card.Body>
    //         </Card>
    //         <Card>
    //           <Card.Img variant="top" src={props.image} alt={props.altTag}/>
    //           <Card.Body>
    //             <Card.Title>{props.cardTitle}</Card.Title>
    //             <Card.Text>
    //               {props.cardText}
    //             </Card.Text>
    //             <Button  href={props.anchorDeployed}>Go somewhere</Button>
    //             <Button  href={props.anchorGitHub}>Go somewhere</Button>
    //           </Card.Body>
    //         </Card>

    //         </CardDeck> */}
    
  );
}

export default Portfolio;