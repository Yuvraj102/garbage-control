import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./NavigationBarComponent.css";

function NavigationBarComponent() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="control_nav"
    >
      <Container>
        <Navbar.Brand href="/">
          <Link to="/home" className="nav_link">
            Garbage Control
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/create" className="nav_link">
                Create
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav_link">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav_link">
                Logout
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBarComponent;
