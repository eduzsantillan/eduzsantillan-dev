import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon, Reveal } from "./UI";

export function Services() {
  const { language } = useLanguage();
  const { services } = getContent(language);

  return (
    <section id="consulting" className="services light-section section-pad">
      <span id="services" className="anchor-alias" />
      <div className="container">
        <h2 className="compact-heading">{services.title}</h2>
        <div className="services-grid">
          {services.items.map((item, index) => (
            <Reveal key={item.id} delay={index * 60} className="service-card">
              <div className="service-top"><Icon name={item.id} size={28} /></div>
              <h3>{item.title}</h3>
              <p className="service-description">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
