import React from "react";
import { Col, Row } from "react-bootstrap";
import Plastique from "../../Assets/Ecussons-img/1.jpg";
import Thermo from "../../Assets/Ecussons-img/2.jpg";
import Velcro from "../../Assets/Ecussons-img/3.jpg";
import VelcroD from "../../Assets/Ecussons-img/4.jpg";
import Colle from "../../Assets/Ecussons-img/5.jpg";
import Aimant from "../../Assets/Ecussons-img/6.jpg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <h3>Plastique</h3>
        <img src={Plastique} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>Thermocollant</h3>
        <img src={Thermo} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>Velcro Une Face</h3>
        <img src={Velcro} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>Velcro Double Face</h3>
        <img src={VelcroD} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>Colle</h3>
        <img src={Colle} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <h3>Aimant</h3>
        <img src={Aimant} />
      </Col>
    </Row>
  );
}

export default Toolstack;
