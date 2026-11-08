import { useState } from "react";
import { getContent, profile, inquiryLink } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./UI";

export function Contact() {
  const { language } = useLanguage();
  const { contact } = getContent(language);
  const emailLink = inquiryLink(language);
  const [copyStatus, setCopyStatus] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("copyFailed");
    }
  };

  return (
    <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
      <span id="process" className="anchor-alias" />
      <div className="container client-contact">
        <div>
          <h2 id="contact-title">{contact.title}</h2>
          <p className="contact-description">{contact.description}</p>
        </div>
        <div className="client-contact-actions">
          <a className="button button-accent contact-button" href={emailLink}>
            {contact.email}<Icon name="diagonal" />
          </a>
          <a className="button contact-linkedin contact-button" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            {contact.linkedin}<Icon name="diagonal" />
          </a>
          <div className="email-row">
            <a href={emailLink}>{profile.email}</a>
            <button onClick={copy} aria-label={contact.copy}><Icon name={copyStatus === "copied" ? "check" : "copy"} size={17} /></button>
          </div>
          <p className="copy-status" role="status">{copyStatus ? contact[copyStatus] : ""}</p>
        </div>
      </div>
    </section>
  );
}
