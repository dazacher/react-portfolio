import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import email from "../../Assets/images/email-32.png";
import LinkedIn from "../../Assets/images/linkedin-3-32.png"
import Resume from "../../Assets/images/document-32.png"
import GitHub from "../../Assets/images/github-9-32.png";
import "./Footer.css";
import Container from "react-bootstrap/esm/Container";

const Footer = () => {
    return (
        <Container class="contactInfo" rfluid>
            <Row className="text-center"> 
                <Col xs={12}>
                    {/* <!-- Link to my email address so someone can email me. --> */}
                    <a href="mailto:dazacher2000@yahoo.com? subject=subject text" id="emailImage">
                        <img src={email} class="indexImages" alt="email" id="email" /></a>
                    {/* <!-- Link to my GitHub page --> */}
                    <a href="https://github.com/dazacher" target="_blank" rel="noopener noreferrer" id="githubImage">
                        <img src={GitHub} class="indexImages" alt="Github" id="github" /></a>
                    {/* <!-- Link to my Resume page --> */}
                    <a href={require("../../Assets/Dee_Ann_Scanniello_Resume_Web_Developer_Full_Stack.pdf")} id="fileImage">
                        <img src={Resume} class="indexImages" alt="Resume" id="file" />
                    </a>
                    {/* <!-- Link to my LinkedIn page --> */}
                    <a href="https://linkedin.com/in/deeannscanniello" target="_blank" rel="noopener noreferrer" id="linkedinImage">
                        <img src={LinkedIn} class="indexImages" alt="LinkedIn" id="linkedin" /></a>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;