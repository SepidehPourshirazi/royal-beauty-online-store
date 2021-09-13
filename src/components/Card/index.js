import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

function index() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="./images/about/1.jpg" />
            <Card.Body className="style-card ">
              <Card.Title>Guerlain</Card.Title>
              <Card.Text>Terracotta Bronzer Powder</Card.Text>
              <p>$129.99</p>
              <Button className="button-card">
                <FontAwesomeIcon icon={faShoppingBag} className="icon-card" />
              </Button>
              {"  "}
              <Button className="button-card">
                <FontAwesomeIcon icon={faHeart} className="icon-card" />
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Img variant="top" src="./images/about/1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={4}>
          <Card>
            <Card.Img variant="top" src="./images/about/1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default index;
