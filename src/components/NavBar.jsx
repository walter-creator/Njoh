// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link for routing

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <h1 className="text-primary display-6">Fruitables</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse" className="justify-content-end">
          <Nav className="mx-auto">
            <Link className="nav-link active" to="/">Homme</Link>
            <Link className="nav-link" to="/about">A Propos</Link>
            <Link className="nav-link" to="/results">Resultat</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
