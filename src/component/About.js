import { getContent, profile } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./UI";

const companies = ["Ontop", "SURA", "Martin Bros."];

export function About() {
  const { language } = useLanguage();
  const { experience } = getContent(language);

  return (
    <section className="experience light-section section-pad" id="experience">
      <span id="about" className="anchor-alias" />
      <div className="container compact-about">
        <div>
          <p className="eyebrow proof-name">{profile.name}</p>
          <h2>{experience.title}</h2>
          <p className="profile-description">{experience.description}</p>
        </div>
        <div className="proof-companies">
          <p className="eyebrow" id="companies-label">{experience.companies}</p>
          <ul aria-labelledby="companies-label">
            {companies.map(company => <li key={company}>{company}</li>)}
          </ul>
          <a className="text-link" href={profile.consultingCV} target="_blank" rel="noopener noreferrer">
            {experience.profile}<Icon name="diagonal" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
