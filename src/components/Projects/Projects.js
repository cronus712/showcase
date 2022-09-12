import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import small from "../../Assets/small.jpg";
import coeur from "../../Assets/coeur.jpg";
import large from "../../Assets/large.jpg";
import Background from "../../Assets/background2.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <div>
        <img className="background-Projects" src={Background} />{" "}
      </div>
      <Container>
        <h1 className="project-heading">Fichiers de broderie</h1>
        <p style={{ color: "white" }}>
          Vous souhaitez convertir un logo ou un fichier image en fichier de
          broderie? Alors vous êtes au bon endroit : nous nous sommes
          spécialisés dans la conversion des dessins et des polices en fichiers
          de broderie. Nos numérateurs spécialement formés peuvent mettre en
          œuvre presque n’importe quel motif.
        </p>
        <h1 className="price-heading">Délais de livraison et prix</h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={small}
              isBlog={false}
              title="Petit logo"
              description="Délai de livraison
              pour les logos avec
              moins de 4000 points"
              price="15 DT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coeur}
              isBlog={false}
              title="Logo Cœur"
              description="Délai de livraison pour les
              logos jusqu’à15 cm hauteur ou
              largeur : un jour ouvrable"
              price="25 DT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={large}
              isBlog={false}
              title="Logo Dos"
              description="Délai de livraison pour logos à
              partir de 15 cm hauteur ou largeur:
              deux jours ouvrables"
              price="35 DT"
            />
          </Col>
        </Row>
      </Container>
      <div className="bottom-project">
        <h1>Livraison express</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nisi
          perspiciatis corrupti ut natus eligendi officiis. Accusamus, fugit,
          reprehenderit quis recusandae veniam possimus illo incidunt dolores in
          odio vero sunt. lor
        </p>
      </div>
    </Container>
  );
}

export default Projects;
