import { getContent, profile } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./UI";

export function About() {
  const { language } = useLanguage();
  const { experience, common } = getContent(language);

  return (
    <section className="experience light-section section-pad" id="experience">
      <span id="about" className="anchor-alias" />
      <div className="container compact-about">
        <div>
          <h2>{experience.title}</h2>
          <p className="profile-description">{experience.description}</p>
        </div>
        <div className="about-actions">
          <a className="text-link" download href={profile.engineeringCV}>
            {common.cv}<Icon name="download" size={16} />
          </a>
          <a className="text-link" href="?intent=role#contact">
            {experience.roleCta}<Icon name="diagonal" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
