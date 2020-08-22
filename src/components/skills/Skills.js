import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import "./Skills.css";
import Mern from "../../assets/images/mern-dark-192x192.png";
import JsHtmlCss from "../../assets/images/JsHtmlCss-192x192.png";
import jQuery from "../../assets/images/jQuery-60x60.png";
import Bootstrap from "../../assets/images/bootstrap-60x60.png";
import Es6 from "../../assets/images/es6-60x60.png";
import mySql from "../../assets/images/mySql-70x70.png";
import Travis from "../../assets/images/travis-70x70.png";
import Heroku from "../../assets/images/heroku-60x60.png";
import Mdb from "../../assets/images/mdb-70x70.png";
import Vs from "../../assets/images/vs-60x60.png";
import Image from "react-bootstrap/Image";

const Skills = () => {
  return (
    <Container className="skillsInfo" fluid>
      <Row>
        <Col xs={12} className="formatColumns">
          <h4>Here is a display of my skills:</h4>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row className="formatRows">
        <Col xs={12} md={3} lg={3} xl={2} className="formatColumns">
          <a
            href="https://www.mongodb.com/mern-stack"
            id="reactImage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Mern}
              alt="mernIcon"
              id="mern"
              className="mx-auto" />
          </a>
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          <a
            href="https://visualstudio.microsoft.com/"
            id="vs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Vs}
              alt="vsIcon"
              id="vs"
              className="mx-auto" />
          </a>
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          <a
            href="https://jquery.com/"
            id="jQuery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={jQuery}
              alt="jQueryIcon"
              id="jQuery"
              className="mx-auto"
            />
          </a>
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          <a
            href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
            id="BoostrapImage"
          >
            <Image
              src={Bootstrap}
              alt="Bootstrap"
              id="Bootstrap"
              className="mx-auto"
            />
          </a>
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          {/* <!-- Link to my Resume page --> */}
          <a
            href="http://es6-features.org/#Constants"
            id="es6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Es6}
              alt="Es6"
              id="ES6"
              className="mx-auto" />
          </a>
          {/* <!-- Link to my LinkedIn page --> */}
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          {/* <!-- Link to my Resume page --> */}
          <a
            href="https://www.mysql.com/"
            id="mySql"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={mySql}
              alt="mySql"
              id="mySql" />
          </a>
          {/* <!-- Link to my LinkedIn page --> */}
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          {/* <!-- Link to my Resume page --> */}
          <a
            href="https://travis-ci.org/"
            id="travis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Travis}
              alt="travis"
              id="travis" />
          </a>
          {/* <!-- Link to my LinkedIn page --> */}
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          {/* <!-- Link to my Resume page --> */}
          <a
            href="https://www.heroku.com/"
            id="heroku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Heroku}
              alt="heroku"
              id="heroku" />
          </a>
          {/* <!-- Link to my LinkedIn page --> */}
        </Col>
        <Col xs={6} md={3} lg={2} xl={1} className="formatColumns">
          {/* <!-- Link to my Resume page --> */}
          <a
            href="https://mdbootstrap.com/"
            id="mdb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Mdb}
              alt="mdb"
              id="mdb" />
          </a>
          {/* <!-- Link to my LinkedIn page --> */}
        </Col>
        <Col xs={12} md={3} lg={3} xl={2} className="formatColumns">
          <a
            href="https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            id="JsHtmlCssImage"
          >
            <Image
              src={JsHtmlCss}
              alt="JsHtmlCss"
              id="JsHtmlCss" />
          </a>
        </Col>
      </Row>

    </Container>
  );
};

export default Skills;
