import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/footer-img.jpg";
import { IoMdCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-logo">
          <img src={logo} />
        </Col>

        <Col md="4" className="footer-address">
          <h3>Adresse</h3>
          <p> SmartEmbroidery, AV.de La Liberté, 7500, Tunis Tunisia</p>
        </Col>

        <Col md="4" className="footer-contact">
          <h3> Contactez-nous</h3>
          <ul>
            <li>
              <IoMdCall size={"1.5em"} />
              +216 <b>26 26 26 26</b>
            </li>

            <li>
              <AiOutlineMail size={"1.5em"} />
              examplemail@gmail.com
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
