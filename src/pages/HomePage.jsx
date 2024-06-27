import { Container, Row, Col } from "react-bootstrap";

import LoterryCard from "../components/LoterryCard";



function HomePage() {


    return (
        <Container>
          <h1 className="my-4 text-center">Final Chance to Enter</h1>
          <Row>
            <Col xs={12} md={6} className="mb-4">
              <LoterryCard
                image="/src/assets/images/fruite-item-3.jpg" // Remplacez par l'URL de votre image
                title="Coldplay – Shared Hospitality Suite"
                description=""
                price="9.97"
                timeRemaining="1 Days 12 Hr 23 Min 10 Sec"
                ticketsRemaining="48"
                totalTickets="397"
                progressPercentage={12}
              />
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <LoterryCard
                image="/src/assets/images/best-product-2.jpg" // Remplacez par l'URL de votre image
                title="2 Shared Hospitality Tickets to AC/DC LIVE in Croke Park & Hotel Stay #4"
                description=""
                price="9.97"
                timeRemaining="1 Days 12 Hr 23 Min 11 Sec"
                ticketsRemaining="263"
                totalTickets="497"
                progressPercentage={52}
              />
            </Col>
            <Col xs={12} md={6} className="mb-4">
              <LoterryCard
                image="/src/assets/images/featur-2.jpg" // Remplacez par l'URL de votre image
                title="3 night City Break to Lisbon for 2 #2"
                description=""
                price="2.97"
                timeRemaining="1 Days 12 Hr 23 Min 11 Sec"
                ticketsRemaining="553"
                totalTickets="797"
                progressPercentage={69}
              />
            </Col>
          </Row>
        </Container>
      );
}export default HomePage;