// CardComponent.js
// import React from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const LoterryCard = ({ image, title, description, price, timeRemaining, ticketsRemaining, totalTickets, progressPercentage }) => {
  return (
    <Card className="text-center mb-4">
      <Card.Header className="bg-warning text-dark">Last Chance</Card.Header>
      <Card.Img variant="top" src={image} alt={title} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>£{price}</Card.Text>
        <Button variant="primary">Enter Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        <div>Ends Tomorrow</div>
        <div>{timeRemaining}</div>
        <div>Tickets Remaining</div>
        <ProgressBar now={progressPercentage} label={`${progressPercentage}%`} />
        <div>{ticketsRemaining}/{totalTickets}</div>
      </Card.Footer>
    </Card>
  );
};

export default LoterryCard;
