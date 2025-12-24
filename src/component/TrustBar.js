import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

export const TrustBar = () => {
  const { language } = useLanguage();
  const { trustBar } = getContent(language);

  return (
    <section className="trust-bar">
      <Container>
        <motion.div
          className="trust-bar-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {trustBar.items.map((item, index) => (
            <motion.div
              key={index}
              className="trust-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="trust-icon">{item.icon}</span>
              <span className="trust-text">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
