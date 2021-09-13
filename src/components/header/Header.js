import React, { useState } from "react";
import { Navbar, Modal, Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import "./Header.css";
import Login from "../login/Login";

export default function () {
  const [isOpen, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Navbar className="main-header" sticky="top">
      <Navbar.Brand href="#home" className="brand-header">
        <img
          src="images/logo/roy.jpg"
          width="53"
          height="39"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />{" "}
        royal beauty
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="icon-header"
          size="2x"
          onClick={clickHandler}
        />

        <FontAwesomeIcon icon={faGratipay} className="icon-header" size="2x" />
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="icon-header"
          size="2x"
        />
      </Navbar.Collapse>

      {/*  */}
      <Modal show={isOpen} onHide={handleClose}>
        <Container>
          <Modal.Header closeButton>
            <Modal.Title className="title-modal">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
        </Container>

        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal>
    </Navbar>
  );
}
