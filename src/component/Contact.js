import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import contactWandaImg from "../assets/img/contactWanda.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ListGroup from "react-bootstrap/ListGroup";
import {
  TreeFill,
  Whatsapp,
  FileEarmarkPersonFill,
  EnvelopeAtFill,
} from "react-bootstrap-icons";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");

  const buildWhatsappMessage = () => {
    const message = "Hello 👋🏻 ";
    return (
      "https://api.whatsapp.com/send/?phone=17787934659&text=" +
      message +
      "&type=phone_number&app_absent=0"
    );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactWandaImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Let’s ready to achieve your goals 🎯</h2>

                  <ListGroup>
                    <ListGroup.Item
                      action
                      href="https://linktr.ee/eduzsantillan"
                      target="_blank"
                      variant="dark"
                    >
                      <TreeFill size={40} /> <span>Linktree</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href={buildWhatsappMessage()}
                      target="_blank"
                      variant="dark"
                    >
                      <Whatsapp size={40} /> <span>Send a message</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="mailto:eduzsantillan@gmail.com"
                      target="_blank"
                      variant="dark"
                    >
                      <EnvelopeAtFill size={40} /> <span>Send a mail</span>
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="https://drive.google.com/file/d/1b0b-a4E3JdUMUdFAasg-ig31bQaC6W5X/view?usp=sharing"
                      target="_blank"
                      variant="dark"
                    >
                      <FileEarmarkPersonFill size={40} />{" "}
                      <span>Download Resume</span>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
