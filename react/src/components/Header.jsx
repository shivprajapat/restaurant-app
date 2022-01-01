import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar Offcanvas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/list">
                List
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                Create
              </Nav.Link>
              <Nav.Link as={Link} to="/search">
                Search
              </Nav.Link>
              <Nav.Link as={Link} to="/details">
                Details
              </Nav.Link>
              <Nav.Link as={Link} to="/update">
                Update
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
