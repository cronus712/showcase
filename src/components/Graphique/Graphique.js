import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./GraphiqueCard";
import easy from "../../Assets/Graphique-img/easy.jpg";
import hard from "../../Assets/Graphique-img/hard.jpg";
import very from "../../Assets/Graphique-img/veryhard.jpg";
import Background from "../../Assets/Graphique-img/background.jpg";

function Graphiques() {
  return (
    <Container fluid className="project-section">
      <div>
        <img className="background-Projects" src={Background} />{" "}
      </div>
      <Container>
        <h1 className="project-heading">Graphiques Vectoriels</h1>
        <p style={{ color: "white" }}>
          Les graphiques vectoriels ne sont pas créés à partir d’une grille de
          pixels tels que des images JPEG, GIF et BMP, mais via des points de
          début et de fin, des courbes, des angles et des lignes. Ainsi, les
          graphiques vectoriels peuvent être agrandis ou réduits sans perte de
          qualité. Les bords des objets représentés restent clairs. C’est
          pourquoi les graphiques vectoriels sont idéaux pour l’impression, car
          l’image reste toujours clairement reconnaissable. Ils sont la norme
          industrielle pour l’impression de sérigraphie et de textile ainsi que
          pour la publicité.
        </p>
        <h1 className="price-heading">Délais de livraison et prix</h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easy}
              isBlog={false}
              title="Simple"
              description="Des graphiques vectoriels
              simples sont livrés le jour
              ouvrable suivant"
              price="15 DT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hard}
              isBlog={false}
              title="Complexe"
              description="Des graphiques vectoriels
              complexes sont livrés dans
              les deux jours ouvrables."
              price="20 DT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={very}
              isBlog={false}
              title="Extrêmement complexe"
              description="Des graphiques vectoriels
               extrêmement complexes 
              sont livrés en 48h/72h"
              price="Demande de devis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Graphiques;
