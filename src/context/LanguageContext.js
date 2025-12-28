import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const getDefaultLanguage = () => {
  const saved = localStorage.getItem("language");
  if (saved) return saved;

  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang?.startsWith("es")) return "es";
  return "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getDefaultLanguage);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
