import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <motion.div
        className="toggle-track"
        animate={{
          backgroundColor:
            language === "en"
              ? "rgba(255,255,255,0.1)"
              : "rgba(170,54,124,0.3)",
        }}
      >
        <motion.div
          className="toggle-thumb"
          animate={{
            x: language === "en" ? 0 : 32,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        <span
          className={`toggle-label toggle-en ${
            language === "en" ? "active" : ""
          }`}
        >
          EN
        </span>
        <span
          className={`toggle-label toggle-es ${
            language === "es" ? "active" : ""
          }`}
        >
          ES
        </span>
      </motion.div>
    </div>
  );
};
