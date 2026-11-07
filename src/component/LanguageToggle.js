import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../content/siteContent";
export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  return <button className="language-toggle" onClick={toggleLanguage} aria-label={getContent(language).nav.language}><span className={language === "en" ? "selected" : ""}>EN</span><span className="language-divider">/</span><span className={language === "es" ? "selected" : ""}>ES</span></button>;
}
