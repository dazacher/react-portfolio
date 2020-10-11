import React from "react";
import "./About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function About() {
  return (
    <Container id="index">
      <Row>
        <Col xs={12} md={3} className="img-fix">
          {/* <!-- Picture of myself and a couple of paragraphs about myself--> */}
          <div
            data-aos="zoom-in-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1600"
          >
            <Image
              fluid
              className="img-responsive mx-auto"
              id="deeannImg"
              src={process.env.PUBLIC_URL + "/Me.jpeg"}
              roundedCircle
              alt="Dee Ann Scanniello"
            />
          </div>
        </Col>
        <Col xs={12} md={9} id="dafs">
          <div
            data-aos="fade-up-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1600"
          >
            <h1>I am Dee&nbsp;Ann...</h1>
            <p id="fullstack">a full stack web developer</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col-12>
          <h2>About Me</h2>
        </Col-12>
      </Row>
      <Row>
        <Col>
          {/* <!-- Picture of myself and a couple of paragraphs about myself--> */}
          <p>
            My name is Dee Ann Scanniello. I am a Full Stack Web Developer, self-driven and easily adaptable with a passion for learning, problem-solving and collaborating in a team environment. Quick learner, who enjoys challenges and collaboration. Leveraging my 10+ years programming experience in Ada, C# and SQL for the Insurance industry, Aeronautics Industry and Semiconductor industry to analyze complex problems and build creative solutions. A graduate from the University of Arizona Bootcamp with a Certificate in Full Stack Web Development and a Bachelor’s degree from DeVry University in Computer Information Systems. What I love about programming is that you never stop learning. More importantly, I love to create anything imagined, test it and improve it as technology progresses. Proven soft-skills such as independent, organized, motivated, conflict resolution, working remotely on teams, and detail-oriented.  Looking to grow as a programmer and eventually become a mentor to others. Actively seeking an organization that provides a challenging, inclusive, diverse work environment.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
