import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="auto">
            <div className="footer-logo">
              {'</>'} Eduardo Zuñiga
            </div>
          </Col>
          <Col xs="auto">
            <Row className="align-items-center">
              <Col xs="auto">
                <div className="social-icon">
                  <a 
                    href="https://www.linkedin.com/in/eduzuniga/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon1} alt="LinkedIn" />
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UClYgKxDslmfUmGoVIYkTPHw" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon2} alt="YouTube" />
                  </a>
                  <a 
                    href="https://github.com/eduzsantillan" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon3} alt="GitHub" />
                  </a>
                  <a 
                    href="https://gitlab.com/eduzsantillan" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon4} alt="GitLab" />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-end">
            <p className="copyright">Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
