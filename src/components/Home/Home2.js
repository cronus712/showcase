import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../Assets/image.jpg";
import fichier from "../../Assets/fichierBrod.webp";
import graphique from "../../Assets/Graphiques.png";
import ecusson from "../../Assets/Ecusson.png";
import dig1 from "../../Assets/Digitising-1.webp";
import dig2 from "../../Assets/Digitising-2.webp";
import dig3 from "../../Assets/Digitising-4.webp";
import dig4 from "../../Assets/Digitising-3.webp";
import dig5 from "../../Assets/Digitising-7.webp";
import dig6 from "../../Assets/Digitising-8.webp";

function Home2() {
  return (
    <Container fluid classNameName="home-about-section" id="about">
      <Container>
        <Row>
          <div className="container">
            <h1 className="heading">Presentation de service</h1>

            <div className="gallery">
              <div className="gallery-item">
                <h3>Fichiers de broderie</h3>
                <img className="gallery-image" src={fichier} />
              </div>

              <div className="gallery-item">
                <h3>Graphiques vectoriels</h3>
                <img className="gallery-image" src={graphique} />
              </div>

              <div className="gallery-item">
                <h3>Ecussons personalisés</h3>
                <img className="gallery-image" src={ecusson} />
              </div>
            </div>
          </div>
        </Row>

        <Row className="bottom-gallery">
          <div className="container">
            <h1 className="heading">Gallerie</h1>

            <div className="gallery">
              <div className="gallery-item">
                <img className="gallery-image" src={dig1} />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src={dig2} />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src={dig3} />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src={dig4} />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src={dig5} />
              </div>

              <div className="gallery-item">
                <img className="gallery-image" src={dig6} />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
