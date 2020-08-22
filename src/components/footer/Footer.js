import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Email from "../../assets/images/email-32.png";
import GitHub from "../../assets/images/github-9-32.png";
import Pdf from "../../assets/images/document-32.png";
import LinkedIn from "../../assets/images/linkedin-3-32.png";
import "./Footer.css";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <Container className="contactInfo" fluid>
      <Row>
        <Col xs={12}>
          <h4>Contact Me! I look forward to working with you.</h4>
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={12}>
          {/* <!-- Link to my email address so someone can email me. --> */}
          {/* <div
            data-aos="flip-down"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
          > */}
            <a
              href="mailto:dazacher2000@yahoo.com? subject=subject text"
              id="emailImage"
            >
              <img src={Email} alt="email" id="email" />
            </a>
            {/* <!-- Link to my GitHub page --> */}
            <a
              href="https://github.com/dazacher"
              target="_blank"
              rel="noopener noreferrer"
              id="githubImage"
            >
              <Image
                src={GitHub}
                alt="Github"
                id="github"
              />
            </a>
            {/* <!-- Link to my Resume page --> */}
            <a
              href={require("../../assets/images/Dee_Ann_Scanniello_Resume_Web_Developer_Full_Stack2.pdf")}
              id="fileImage"
            >
              <Image src={Pdf} alt="Resume" id="file" />
            </a>
            {/* <!-- Link to my LinkedIn page --> */}
            <a
              href="https://linkedin.com/in/deeannscanniello"
              target="_blank"
              rel="noopener noreferrer"
              id="linkedinImage"
            >
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                id="linkedin"
              />
            </a>
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
