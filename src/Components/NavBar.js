import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import Background1 from "../Homepage2.jpeg";
import logo from "../logo.png";
import logo2 from "../logo2.png";
var sectionStyle = {
  backgroundImage: `url(${Background1})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};

function NavBar() {
  return (
    <div style={sectionStyle}>
      <Navbar
        style={{
          backgroundColor: "white",
        }}
        expand="lg"
        sticky="top"
        id="navbar"
      >
        <Navbar.Brand href="#head">Quang's demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Link
                activeClass="active"
                to="head"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link
                activeClass="active"
                to="form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Form
              </Link>
            </Nav.Link>
            <Nav.Link href="#">
              <Link
                activeClass="active"
                to="form"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Footer
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <img src={logo} alt="logo" />
          <img
            src={logo2}
            style={{ width: "30px", height: "30px" }}
            alt="logo2"
          />
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
