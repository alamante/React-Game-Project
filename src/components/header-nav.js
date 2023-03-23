import { ReactComponent as Logo } from "../Design-Materials/icons-etc/SVG/Logo.svg";
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>
      <Navbar className="custom-nav">
        <Navbar.Brand href="#home">
          <Logo
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav.Item className="ml-auto">
          <Nav.Link className="highscores" eventKey="link">
            HIGHSCORES
          </Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
  );
}

export default Header;
