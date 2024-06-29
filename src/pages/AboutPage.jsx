// pages/AboutPage.jsx
// import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../assets/css/AboutPage.css';

import about from '../assets/images/about.jpg';

const AboutPage = () => {
  return (
    <Container className="about-page">
      <Row className="about-header text-center my-5">
        <Col>
          <h1>About Us</h1>
          <p>Learn more about our journey and values</p>
        </Col>
      </Row>
      <Row className="about-content">
        <Col md={6} className="mb-4">
          <img
            src={about}
            alt="About Us"
            className="img-fluid about-image"
          />
        </Col>
        <Col md={6}>
          <h2>Our Story</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            urna eu sapien convallis pulvinar. In sed urna non purus tempor
            bibendum. Nam ac libero nec nulla dapibus faucibus. Vivamus tempor
            eros a tincidunt feugiat.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver the best service possible to our customers
            and ensure that their needs are met with the highest standards.
          </p>
          <h2>Our Team</h2>
          <p>
            We have a dedicated team of professionals who work tirelessly to
            ensure our customers are satisfied.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
