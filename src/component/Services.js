import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

export const Services = () => {
  const { language } = useLanguage();
  const { services } = getContent(language);

  return (
    <section className="services" id="services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{services.title}</h2>
          <p className="services-intro">{services.intro}</p>
        </motion.div>

        <Row className="services-grid">
          {services.items.map((service, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <span className="service-subtitle">{service.subtitle}</span>
                <p>{service.description}</p>
                <div className="service-deliverables">
                  <span className="deliverables-label">
                    {services.deliverablesLabel}
                  </span>
                  <ul>
                    {service.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
