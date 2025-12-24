import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { XLg, ArrowRight } from "react-bootstrap-icons";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

export const CaseStudies = () => {
  const { language } = useLanguage();
  const { caseStudies } = getContent(language);
  const [selectedStudy, setSelectedStudy] = useState(null);

  const openModal = (study) => setSelectedStudy(study);
  const closeModal = () => setSelectedStudy(null);

  return (
    <section className="case-studies" id="case-studies">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{caseStudies.title}</h2>
          <p className="case-studies-intro">{caseStudies.intro}</p>
        </motion.div>

        <Row>
          {caseStudies.items.map((study, index) => (
            <Col key={study.id} xs={12} md={6} lg={4}>
              <motion.div
                className="case-study-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => openModal(study)}
              >
                <span className="case-study-industry">{study.industry}</span>
                <h3>{study.title}</h3>
                <p className="case-study-context">{study.context}</p>

                <div className="case-study-results">
                  {study.results.map((result, i) => (
                    <div key={i} className="result-item">
                      <span className="result-metric">{result.metric}</span>
                      <span className="result-label">{result.label}</span>
                    </div>
                  ))}
                </div>

                <div className="case-study-stack">
                  {study.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="stack-chip">
                      {tech}
                    </span>
                  ))}
                  {study.stack.length > 4 && (
                    <span className="stack-chip">
                      +{study.stack.length - 4}
                    </span>
                  )}
                </div>

                <span className="view-details">{caseStudies.viewDetails}</span>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal
        show={selectedStudy !== null}
        onHide={closeModal}
        centered
        size="lg"
        className="case-study-modal"
      >
        {selectedStudy && (
          <>
            <Modal.Header>
              <div>
                <span className="modal-industry">{selectedStudy.industry}</span>
                <Modal.Title>{selectedStudy.title}</Modal.Title>
              </div>
              <button className="modal-close" onClick={closeModal}>
                <XLg size={20} />
              </button>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-section">
                <h4>{caseStudies.modalLabels.challenge}</h4>
                <p>{selectedStudy.problem}</p>
              </div>

              <div className="modal-section">
                <h4>{caseStudies.modalLabels.constraints}</h4>
                <p className="modal-constraints">{selectedStudy.constraints}</p>
              </div>

              <div className="modal-section">
                <h4>{caseStudies.modalLabels.actions}</h4>
                <ul>
                  {selectedStudy.actions.map((action, i) => (
                    <li key={i}>{action}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4>{caseStudies.modalLabels.results}</h4>
                <div className="modal-results">
                  {selectedStudy.results.map((result, i) => (
                    <div key={i} className="modal-result-item">
                      <span className="modal-result-metric">
                        {result.metric}
                      </span>
                      <span className="modal-result-label">{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>{caseStudies.modalLabels.stack}</h4>
                <div className="modal-stack">
                  {selectedStudy.stack.map((tech, i) => (
                    <span key={i} className="modal-stack-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-cta">
                <p>{caseStudies.modalLabels.cta}</p>
                <a
                  href="#contact"
                  className="modal-cta-button"
                  onClick={closeModal}
                >
                  {caseStudies.modalLabels.ctaButton} <ArrowRight size={18} />
                </a>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </section>
  );
};
