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
            data-aos="fade-up-left"
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
            My name is Dee Ann Scanniello. I am a Full Stack Web Developer,
            self-driven, easily adaptable and flexible, with a knack for
            attention to detail. I have a passion for full stack development.
            Quick learner, who enjoys challenges and resolving problems. A
            graduate from the University of Arizona Bootcamp with a Certificate
            in Full Stack Web Development and a Bachelor’s degree from DeVry
            University in Computer Information Systems. Skilled in JavaScript,
            jQuery, Bootstrap, AJAX, Git Bash, Sequealize, Node.js, Express.js,
            Inquirer, React.js (this Portfolio was created with React.js),
            MySql2, Git Hub, Travis CI/CD, Handlebars.js, OOP, Heroku, RESTful
            API's, AOS, Moment, Material Design, Axios, MongoDB, Mongoose, and
            Visual Studio. Proven soft-skills such as independent, organized,
            motivated, collaboration, team work, conflict resolution, problem
            solving, detail-oriented, and have a special skill at final testing
            software. Looking to grow as a programmer and eventually become a
            mentor to others.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
