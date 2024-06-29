// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaWhatsapp, FaHome, FaInfoCircle, FaTrophy } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-top-banner">
        <div className="nav-left">
          <span className="payment-text">Orange Money |</span>
          <span className="payment-text">MTN Money</span>
        </div>
        <div className="nav-right">
          <FaWhatsapp size={20} />
          <span className="tel">698-824-068</span>
        </div>
      </div>
      <Navbar bg="dark" variant="dark" expand="xl" className="nav-main">
        <Container fluid className="">
          <Navbar.Brand href="/" className="nav-brand">
            <h1>Njoh</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse" className="justify-content-end">
            <Nav className="mx-auto">
              <Link className="nav-link" to="/">
                <FaHome className="me-2" /> Home
              </Link>
              <Link className="nav-link" to="/about">
                <FaInfoCircle className="me-2" /> About
              </Link>
              <Link className="nav-link" to="/results">
                <FaTrophy className="me-2" /> Results
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
