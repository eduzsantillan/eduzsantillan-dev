import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { CheckCircleFill, Download } from "react-bootstrap-icons";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

export const About = () => {
  const { language } = useLanguage();
  const { about, nav } = getContent(language);

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} lg={8} className="mx-auto">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>{about.title}</h2>
              <p>{about.description}</p>

              <div className="credibility-bullets">
                {about.credibilityBullets.map((bullet, index) => (
                  <motion.div
                    key={index}
                    className="credibility-bullet"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircleFill className="credibility-icon" />
                    <span>{bullet}</span>
                  </motion.div>
                ))}
              </div>

              <div className="about-highlights">
                {about.highlights.map((highlight, index) => (
                  <motion.span
                    key={index}
                    className="highlight-chip"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {highlight}
                  </motion.span>
                ))}
              </div>

              <motion.a
                className="resume-link"
                href="/Eduardo-Zuniga.pdf"
                download
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Download size={16} />
                {nav.resumeLabel}
              </motion.a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
