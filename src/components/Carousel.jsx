// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/css/CarouselComponent.css';

// Import direct des images optimisées
import gold1 from '../assets/images/background.jpg';
import gold2 from '../assets/images/gold2.jpg';
import gold3 from '../assets/images/gold3.jpg';
import gold4 from '../assets/images/gold4.jpg';

const CarouselComponent = () => {
  return (
    <Carousel controls={true} indicators={false} interval={3000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={gold1}
          alt="Slide 1"
        />
        <Carousel.Caption>
          <h3>Tentez votre chance et profitez de manifique mis a votre disposition </h3>
          <p>Cette semaine un super scooter a gagner avec une participatioin de 500Fr seulement. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={gold2}
          alt="Slide 2"
        />
        <Carousel.Caption>
          <h3>Slide 2</h3>
          <p>Second slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={gold3}
          alt="Slide 3"
        />
        <Carousel.Caption>
          <h3>Slide 3</h3>
          <p>Third slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={gold4}
          alt="Slide 4"
        />
        <Carousel.Caption>
          <h3>Slide 4</h3>
          <p>Fourth slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
