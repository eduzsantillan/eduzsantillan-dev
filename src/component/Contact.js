import { useState } from "react";
import { getContent, profile, inquiryLink } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./UI";

export function Contact() {
  const { language } = useLanguage();
  const { contact, common } = getContent(language);
  const roleInquiry = new URLSearchParams(window.location.search).get("intent") === "role";
  const emailLink = inquiryLink(language, roleInquiry ? "role" : "project");
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
    <section className="contact section-pad" id="contact">
      <div className="contact-glow" />
      <span id="process" className="anchor-alias" />
      <div className="container contact-layout">
        <div>
          <h2>{roleInquiry ? contact.roleTitle : contact.title}</h2>
          <p className="contact-description">{roleInquiry ? contact.roleDescription : contact.description}</p>
          {!roleInquiry && (
            <ol className="contact-steps">
              {contact.steps.map(step => <li key={step}>{step}</li>)}
            </ol>
          )}
        </div>
        <div className="contact-panel">
          <a className="button button-accent contact-button" href={emailLink}>
            {roleInquiry ? contact.roleEmail : contact.email}<Icon name="diagonal" />
          </a>
          <div className="email-row">
            <a href={emailLink}>{profile.email}</a>
            <button onClick={copy} aria-label={contact.copy}><Icon name={copyStatus === "copied" ? "check" : "copy"} size={17} /></button>
          </div>
          <p className="copy-status" role="status">{copyStatus ? contact[copyStatus] : ""}</p>
          <div className="contact-download">
            <a href={roleInquiry ? profile.engineeringCV : profile.consultingCV} download>
              {roleInquiry ? common.cv : common.consultingCV}<Icon name="download" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
