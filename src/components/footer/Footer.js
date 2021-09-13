import React from "react";
import { Container, Row, Col, Nav, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagramSquare,
  faFacebookSquare,
  faPinterestSquare,
  faTwitterSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="main-style mt-3">
      <Container>
        <Row>
          <Col xs="6" sm="4" className="customer-care-link mt-4 mb-2">
            <h6>CUSTOMER CARE</h6>

            <NavLink href="#">
              <FontAwesomeIcon icon={faEnvelope} /> customercare@royalbeauty.com
            </NavLink>
            <NavLink href="#">
              <FontAwesomeIcon icon={faPhone} /> +852 1234 5678
            </NavLink>
          </Col>
          <Col xs="6" sm="4" className="footer-menu-link mt-3 mb-3 ">
            <Nav defaultActiveKey="/home" className="flex-column">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/contact">CONTACT</NavLink>
              <NavLink href="/about">ABOUT ROYALBEAUTY</NavLink>
            </Nav>
          </Col>
          <Col sm="4">
            <h6 className="follow-us mt-4 mb-2">follow us</h6>
            <br />
            <Nav className="social-media-link">
              <NavLink href="#">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="facebook"
                  size="2x"
                />
              </NavLink>
              <NavLink href="#">
                <FontAwesomeIcon
                  size="2x"
                  icon={faInstagramSquare}
                  className="instagram"
                />
              </NavLink>
              <NavLink href="#">
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="twitter"
                  size="2x"
                />
              </NavLink>
              <NavLink href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="linkedin"
                  size="2x"
                />
              </NavLink>

              <NavLink href="#">
                <FontAwesomeIcon
                  icon={faPinterestSquare}
                  className="pinterest"
                  size="2x"
                />
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
