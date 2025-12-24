import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Calendar,
  EnvelopeAt,
  Linkedin,
  CheckCircle,
  ArrowRightCircle,
} from "react-bootstrap-icons";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

export const Contact = () => {
  const { language } = useLanguage();
  const { contact } = getContent(language);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpwzgkpd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: contact.formSuccess,
        });
        setFormState({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: contact.formError,
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: contact.formError,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact-new" id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-header"
        >
          <h2>{contact.headline}</h2>
          <div className="contact-bullets">
            {contact.bullets.map((bullet, index) => (
              <div key={index} className="contact-bullet">
                <CheckCircle size={18} />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <Row className="contact-content">
          <Col xs={12} lg={6}>
            <motion.div
              className="contact-ctas"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href={contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta-primary"
              >
                <Calendar size={24} />
                <div>
                  <span className="cta-title">{contact.bookingLabel}</span>
                  <span className="cta-subtitle">
                    {contact.bookingSubtitle}
                  </span>
                </div>
                <ArrowRightCircle size={20} />
              </a>
              <p className="micro-promise">{contact.microPromise}</p>

              <a
                href={`mailto:${contact.email}`}
                className="contact-cta-secondary"
              >
                <EnvelopeAt size={24} />
                <div>
                  <span className="cta-title">{contact.emailLabel}</span>
                  <span className="cta-subtitle">{contact.email}</span>
                </div>
              </a>

              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-cta-secondary"
              >
                <Linkedin size={24} />
                <div>
                  <span className="cta-title">{contact.linkedinLabel}</span>
                  <span className="cta-subtitle">
                    {contact.linkedinSubtitle}
                  </span>
                </div>
              </a>
            </motion.div>
          </Col>

          <Col xs={12} lg={6}>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3>{contact.formTitle}</h3>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formState.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder={contact.formPlaceholder}
                rows={4}
                value={formState.message}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? contact.formSending : contact.formButton}
              </button>
              <p className="response-time">{contact.responseTime}</p>

              {status.message && (
                <p className={`form-status ${status.type}`}>{status.message}</p>
              )}
            </motion.form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
