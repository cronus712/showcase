import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Carousel from "react-bootstrap/Carousel";
import item1 from "../../Assets/Patch-2.webp";
import item2 from "../../Assets/Patch-3.webp";
import item3 from "../../Assets/Vector-1.webp";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bienvenue!{" "}
              </h1>

              <h3 className="heading-name">
                Nous sommes le numéro un dans la numérisation de broderie et
                l'espace vectorisation. Nos programmateurs qualifiés créent vos
                dessins avec vos exigences et vos préférences techniques. De la
                broderie complexe ou simple, nous fournissons les fichiers de
                broderie dans un délai de 24 heures.
              </h3>

              <h3 className="heading-name">
                Avez-vous une image qui n'est pas bonne au point de vue de la
                qualité? Nous pouvons vous aider à retoucher vos dessins, et nos
                graphistes peuvent vous aider à convertir vos images en qualité
                supérieure.
              </h3>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Carousel style={{ marginTop: "20%" }}>
                <Carousel.Item>
                  <img
                    src={item1}
                    alt="First slide"
                    className="home-carousel"
                  />
                  <Carousel.Caption>
                    <h3>Fichiers de broderie</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="home-carousel"
                    src={item2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Graphiques vectoriels</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="home-carousel"
                    src={item3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Ecussons</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
