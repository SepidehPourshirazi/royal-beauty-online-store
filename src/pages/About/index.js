import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container className="mt-2">
        <Row>
          <Col>
            {" "}
            <div className="mt-5 about-about">
              <h3 className="heading-about">Why do we use it?</h3>
              <p className="p-about">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </Col>
          <Col>
            <Image src="./images/about/0.jpg" thumbnail className="mt-5" />
          </Col>
        </Row>
        <hr className="mt-5 mb-5" />
        <Row>
          <Col>
            <Image src="./images/about/2.jpg" roundedCircle className="mt-5" />
          </Col>
          <Col>
            {" "}
            <div className="mt-5">
              {" "}
              <h3>Why do we use it?</h3>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
