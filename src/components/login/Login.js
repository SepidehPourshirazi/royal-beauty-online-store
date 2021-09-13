import React from "react";
import { Form, Col, Row, Button, Container } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col sm={12}>
              <Form.Control type="email" placeholder="Enter Email" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Col sm={12}>
              <Form.Control type="password" placeholder="Enter Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={12}>
              <Button type="submit" variant="dark">
                Login
              </Button>
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 "
            controlId="formHorizontalCheck"
          >
            <Col sm={6}>
              <Form.Check label="Remember me" />
            </Col>
            <Col sm={6}>
              <p>Forgot Password?</p>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};
export default Login;
