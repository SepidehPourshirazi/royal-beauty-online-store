import React, { Component } from "react";
import { Nav, Container, FormControl, Navbar, Form } from "react-bootstrap";
import "./Navbar.css";

export default function () {
  return (
    <Container className="container-navbar">
      <Navbar className="navbar-navbar ">
        <Nav className="mr-auto nav-navbar ">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/fragrance">FRAGRANCE</Nav.Link>
          <Nav.Link href="/makeup">MAKEUP</Nav.Link>
          <Nav.Link href="/skincare">SKINCARE</Nav.Link>
        </Nav>
        <Form inline className="search-navbar">
          <FormControl
            type="text"
            placeholder="Search"
            size="sm"
            className="search-navbar-input"
          />
        </Form>
      </Navbar>
    </Container>
  );
}
