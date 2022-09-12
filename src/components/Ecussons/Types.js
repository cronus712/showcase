import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Brode from "../../Assets/Ecussons-img/Brodé.jpg";
import Tisse from "../../Assets/Ecussons-img/WebaufnaherLarge.jpg";
import Pvc from "../../Assets/Ecussons-img/PVCLarge.jpg";
import Cuir from "../../Assets/Ecussons-img/DruckaufnaherLarge.jpg";
import Impression from "../../Assets/Ecussons-img/LederaufnaherLarge.jpg";

function Techstack() {
  return (
    <Container>
      <Container>
        <Row>
          <div className="container">
            <div className="gallery">
              <div className="gallery-item">
                <img className="gallery-image-ecusson" src={Brode} />
                <h3>Écusson Brodé</h3>
                <p>
                  Si vous sélectionnez cette variante, votre image est brodée
                  sur un matériau de base solide.
                </p>
              </div>

              <div className="gallery-item">
                <img className="gallery-image-ecusson" src={Tisse} />
                <h3>Écusson Tissé</h3>
                <p>
                  Si votre motif présente de petites polices ou des détails
                  fins, des écussons tissés sont recommandés pour permettre une
                  mise en œuvre claire.
                </p>
              </div>

              <div className="gallery-item">
                <img className="gallery-image-ecusson" src={Pvc} />
                <h3>PVC-Ecusson</h3>
                <p>
                  Sur les écussons PVC, votre motif est appliqué avec précision
                  même avec une petite écriture.
                </p>
              </div>

              <div className="gallery-item">
                <img className="gallery-image-ecusson" src={Cuir} />
                <h3> Écusson Impression</h3>
                <p>
                  Avec les écussons d’impression, votre image est imprimée sur
                  un écusson, ce qui permet une précision et des détails de
                  couleur élevés.
                </p>
              </div>

              <div className="gallery-item">
                <img className="gallery-image-ecusson" src={Impression} />
                <h3>Écusson En Cuir</h3>
                <p>
                  Ce sont des écussons robustes dans lesquels votre motif est
                  gravé avec précision.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Techstack;
