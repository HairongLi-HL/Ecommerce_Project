import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="sercives">
      <Container>
        <Row>
          <Col lg="3" md="4">
            <div className="service__item">
              <span></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
