import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Bold from "react-bootstrap/Bold";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css"
// import Resume from "../pages/Resume";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";


const Size = ({ children }) => <Navbar.Brand style={{ fontSize: 'xx-large' }}>{children}</Navbar.Brand>
const Bold = ({ children }) => <Navbar.Brand style={{ fontSize: 'bold' }}>{children}</Navbar.Brand>

const NavbarRx = () => {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
    <Navbar.Brand className="navbar-brand" to="/"><Bold><Size>Dee Ann Scanniello</Size></Bold></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link href="../pages/About">About</Nav.Link> */}
          <NavLink to="/" exact className="nav-link">
            About
        </NavLink>
          {/* <Nav.Link href="#profile">Profile</Nav.Link> */}
          <NavLink to="/portfolio" className="nav-link">
            Portfolio
        </NavLink>
        <NavLink className="nav-link" to={`${"../pages/Dee_Ann_Scanniello_Resume_Web_Developer_Full_Stack.pdf"}/Resume`}>
            Resume
        </NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarRx;

// import React from "react";
// import { NavLink } from "react-router-dom";

// function NavTabs() {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <NavLink to="/" exact className="nav-link">
//           About
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink to="/portfolio" className="nav-link">
//           Portfolio
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink to="/resume" className="nav-link">
//           Resume
//         </NavLink>
//       </li>
//       <li className="nav-item">
//         <NavLink to="/contact" className="nav-link">
//           Contact
//         </NavLink>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;
