import React from "react";
import "./Contact.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Container className="container-contact">
        <h3 className="heading-contact">CONTACT US</h3>
        <Form className="style-contact">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <hr />
          <h6> YOUR REQUEST </h6>
          <br />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
          </Form.Group>
          <Button variant="dark" className="button-contact">
            SEND
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
