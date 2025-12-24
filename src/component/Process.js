import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

export const Process = () => {
  const { language } = useLanguage();
  const { process } = getContent(language);

  return (
    <section className="process" id="process">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{process.title}</h2>
          <p className="process-intro">{process.intro}</p>
        </motion.div>

        <div className="process-steps">
          {process.steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <div className="step-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < process.steps.length - 1 && (
                <div className="step-connector" />
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
