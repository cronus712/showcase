import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import map from "../Assets/map.jpg";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/c570e1f0-da24-11ec-8be6-4f814e368566";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <Row className="Form-submit">
        <h2 style={{ color: "white", fontSize: "80px" }}>Thank you!</h2>
        <div style={{ color: "white", fontSize: "30px" }}>
          We'll be in touch soon.
        </div>
      </Row>
    );
  }

  return (
    <Row className="Contact">
      <Col md={5}>
        <div className="container">
          <h1 style={{ color: "#c770f0", fontSize: "60px" }}>Contact</h1>

          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div>
              <input
                className="feedback-input"
                type="text"
                placeholder="Your name"
                name="name"
                required
              />
            </div>
            <div>
              <input
                className="feedback-input"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div>
              <textarea
                className="feedback-input"
                placeholder="Your message"
                name="message"
                required
              />
            </div>
            <div>
              <button type="submit"> Send a message </button>
            </div>
          </form>
        </div>
      </Col>
      {/* <Map
        style={{ width: "100", height: "100" }}
        google={this.props.google}
        zoom={14}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map> */}
      <Col md={5}>
        <div style={{ marginTop: "8%" }}>
          <img style={{ width: "140%" }} src={map} />
        </div>
      </Col>
    </Row>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAGn3uZPCA7FXzYLa9do_FUQT9DJUWWeS8",
})(ContactForm);
