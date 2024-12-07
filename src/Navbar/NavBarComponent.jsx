import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { links } from '../json/headerLinks';

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Sitio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((item, index) => (
              item.submenu ? (
                <NavDropdown title={item.nombre} id={`dropdown-${index}`} key={index}>
                  {item.submenu.map((subItem, subIndex) => (
                    <NavDropdown.Item as={Link} to={subItem.subMenuUrl} key={subIndex}>
                      {subItem.subMenuNombre}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to={item.link} key={index}>{item.nombre}</Nav.Link>
              )
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;