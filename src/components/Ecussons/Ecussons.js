import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Types from "./Types";
import Materiel from "./Materiel";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Écussons personnalisés
            </h1>
            <p style={{ fontSize: "1.5em" }}>
              Nous fournissons des écussons selon vos souhaits. Vous êtes à la
              recherche d’un badge ou écusson de haute qualité à un prix
              avantageux ? Alors vous êtes au bon endroit avec SmartPiquage. Il
              suffit de nous faire une demande de devis et nous vous enverrons
              une estimation sans engagement pour vos écussons ou badges. Vous
              pouvez également utiliser notre service de conseil par téléphone
              pour des conseils sur les motifs, les supports, les délais de
              livraison, etc.
            </p>
          </Col>
        </Row>

        <Types />

        <h1 className="Materiel-support">Materiel de support</h1>
        <Materiel />
      </Container>
    </Container>
  );
}

export default About;
