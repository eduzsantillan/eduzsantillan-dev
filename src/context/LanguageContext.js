import { createContext, useContext, useEffect, useState } from "react";
import { getContent } from "../content/siteContent";
const LanguageContext = createContext();
const getDefaultLanguage = () => {
  try { return localStorage.getItem("language") === "es" ? "es" : "en"; }
  catch { return "en"; }
};
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getDefaultLanguage);
  useEffect(() => {
    try { localStorage.setItem("language", language); } catch { /* Storage may be unavailable. */ }
    document.documentElement.lang = language;
    const { seo } = getContent(language);
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
    for (const key of ["og:title", "twitter:title"]) document.querySelector(`meta[property="${key}"], meta[name="${key}"]`)?.setAttribute("content", seo.title);
    for (const key of ["og:description", "twitter:description"]) document.querySelector(`meta[property="${key}"], meta[name="${key}"]`)?.setAttribute("content", seo.description);
  }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage: () => setLanguage(v => v === "en" ? "es" : "en") }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
