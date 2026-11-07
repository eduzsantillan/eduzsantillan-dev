import { useState } from "react";
import { getContent, profile, inquiryLink } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon, Reveal } from "./UI";
export function Contact() {
  const { language } = useLanguage();
  const { contact, common } = getContent(language);
  const [intent, setIntent] = useState(() => new URLSearchParams(window.location.search).get("intent") === "role" ? "role" : "project");
  const [copyStatus, setCopyStatus] = useState("");
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus("copied"); }
    catch { setCopyStatus("copyFailed"); }
  };
  return <section className="contact section-pad" id="contact"><div className="contact-glow" /><div className="container contact-layout"><Reveal><p className="eyebrow"><span className="status-dot" />{contact.eyebrow}</p><h2>{contact.title}<br /><em>{contact.accent}</em></h2><p className="contact-description">{contact.description}</p><p className="contact-note">{contact.note}</p></Reveal><Reveal className="contact-panel" delay={100}><fieldset className="intent-switch"><legend className="sr-only">{language === "en" ? "Inquiry type" : "Tipo de consulta"}</legend>{["project", "role"].map(value => <label key={value} className={intent === value ? "active" : ""}><input type="radio" name="intent" value={value} checked={intent === value} onChange={() => setIntent(value)} />{contact[value]}</label>)}</fieldset><a className="button button-accent contact-button" href={inquiryLink(language, intent)}>{intent === "project" ? contact.email : contact.roleEmail}<Icon name="diagonal" /></a><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button onClick={copy} aria-label={contact.copy}><Icon name={copyStatus === "copied" ? "check" : "copy"} size={17} /></button></div><p className="copy-status" role="status">{copyStatus ? contact[copyStatus] : ""}</p><div className="contact-download"><span>{contact.download}</span><a href={intent === "project" ? profile.consultingCV : profile.engineeringCV} download>{intent === "project" ? common.consultingCV : common.cv}<Icon name="download" size={16} /></a></div></Reveal></div></section>;
}
