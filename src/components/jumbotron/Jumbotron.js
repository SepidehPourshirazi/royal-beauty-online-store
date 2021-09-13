import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <Container>
      <Carousel fade className="mb-3">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/jumbotron/0.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/jumbotron/1.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/jumbotron/9.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
export default Jumbotron;
