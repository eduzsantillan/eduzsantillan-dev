import { Container, Row, Col } from "react-bootstrap";
import {
  ArrowRight,
  ChevronDown,
  CheckCircleFill,
} from "react-bootstrap-icons";
import { motion } from "framer-motion";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";

const Banner = () => {
  const { language } = useLanguage();
  const { hero } = getContent(language);

  const scrollToCaseStudies = () => {
    document
      .getElementById("case-studies")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="banner" id="home">
      <div className="banner-gradient-orb banner-orb-1" />
      <div className="banner-gradient-orb banner-orb-2" />

      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} lg={10} xl={9}>
            <motion.div
              className="banner-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="hero-tag"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {hero.tag}
              </motion.span>

              <h1>
                <span className="headline-gradient">{hero.headline}</span>
              </h1>

              <p className="hero-subheadline">{hero.subheadline}</p>

              <p className="hero-ideal-for">{hero.idealFor}</p>

              <motion.div
                className="proof-chips"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {hero.proofChips.map((chip, index) => (
                  <motion.div
                    key={index}
                    className="proof-chip"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircleFill className="proof-icon" />
                    <span>{chip}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="hero-ctas"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <button className="primary-cta" onClick={scrollToContact}>
                  <span>{hero.primaryCta}</span>
                  <ArrowRight size={20} />
                </button>
                <button className="secondary-cta" onClick={scrollToCaseStudies}>
                  <span>{hero.secondaryCta}</span>
                  <ChevronDown size={18} />
                </button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Banner;
