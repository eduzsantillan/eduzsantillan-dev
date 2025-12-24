import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

export const ResultsStrip = () => {
  const { language } = useLanguage();
  const { resultsStrip } = getContent(language);

  return (
    <section className="results-strip">
      <Container>
        <motion.div
          className="results-strip-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="results-label">{resultsStrip.label}</span>
          <div className="results-items">
            {resultsStrip.items.map((item, index) => (
              <motion.div
                key={index}
                className="results-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="results-metric">{item.metric}</span>
                <span className="results-text">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
