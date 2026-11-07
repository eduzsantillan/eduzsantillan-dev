import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./UI";

export function AudiencePaths() {
  const { language } = useLanguage();
  const { paths } = getContent(language);

  return (
    <section className="audience-section light-section" aria-label={language === "en" ? "Ways to work together" : "Cómo podemos trabajar juntos"}>
      <div className="container audience-paths">
        {[[paths.recruiter, "#experience"], [paths.client, "#consulting"]].map(([path, href]) => (
          <a href={href} className="audience-path" key={href}>
            <span className="eyebrow">{path.eyebrow}</span>
            <h2>{path.title}</h2>
            <p>{path.description}</p>
            <span className="text-link">{path.cta}<Icon name="diagonal" size={18} /></span>
          </a>
        ))}
      </div>
    </section>
  );
}
