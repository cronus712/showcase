import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import banner1 from "../Assets/page-banner1.jpg";
import banner2 from "../Assets/page-banner2.jpg";

import Test from "./Test";

function Devis() {
  return (
    <Container>
      <Container>
        <Row className="bottom-gallery">
          <div className="container">
            <div className="gallery">
              <div className="gallery-item" style={{ height: "80%" }}>
                <img src={banner1} />
              </div>

              <div className="gallery-item-Devis">
                <h1 className="Devis-description">
                  Obtenez instantanément une estimation du nombre de points
                </h1>
              </div>

              <div className="gallery-item" style={{ height: "80%" }}>
                <img src={banner2} />
              </div>
            </div>
          </div>
          <h3 style={{ color: "white", marginTop: "40px" }}>
            SmartEmbroidery vous propose un outil qui vous permettra d'obtenir
            une estimation du nombre de points pour votre fichier de broderie.
            Cela vous aidera à creer rapidement des offres pour vos clients.
          </h3>
        </Row>
        <Row className="Upload-img">
          <Test />
          <h4 style={{ color: "white", marginTop: "20px" }}>
            Attention: L’aperçu de la broderie est créé automatiquement et n’est
            utilisé que pour une évaluation approximative. L’image affichée ne
            correspond pas au fichier de broderie fini.
          </h4>
        </Row>
      </Container>
    </Container>
  );
}
export default Devis;
