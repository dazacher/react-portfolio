import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Pdf from "../../assets/images/Dee_Ann_Scanniello_Resume_Web_Developer_Full_Stack.pdf";
import "./NavBar.css"



const Size = ({ children }) => <Navbar.Brand style={{ fontSize: 'xx-large' }}>{children}</Navbar.Brand>
const Bold = ({ children }) => <Navbar.Brand style={{ fontSize: 'bold' }}>{children}</Navbar.Brand>

const NavbarRx = () => {
  return (
    <Navbar className="navbar" responisve="true" variant="dark" expand="lg">
      <Navbar.Brand className="navbar-brand" href="/"><Bold><Size>Dee Ann Scanniello</Size></Bold></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink to="/" exact className="nav-link">
            About
        </NavLink>
          <NavLink to="/portfolio" className="nav-link">
            Portfolio
        </NavLink>
          <a className="nav-link"  href={Pdf} target="_blank" rel="noopener noreferrer">
            Resume
        </a>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarRx;