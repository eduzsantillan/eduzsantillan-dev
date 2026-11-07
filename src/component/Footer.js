import { getContent, profile } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Brand, Icon } from "./UI";
export function Footer() {
  const { language } = useLanguage();
  const { contact, common, nav } = getContent(language);
  return <footer className="footer"><div className="container"><div className="footer-main"><div><Brand label={nav.home} /><p>{contact.footer}</p></div><div className="footer-links"><a href={`mailto:${profile.email}`}>Email<Icon name="diagonal" size={14} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<Icon name="diagonal" size={14} /></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<Icon name="diagonal" size={14} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Eduardo Zuñiga. {contact.rights}</span><a href="#home">{common.back}<Icon name="diagonal" size={14} /></a></div></div></footer>;
}
