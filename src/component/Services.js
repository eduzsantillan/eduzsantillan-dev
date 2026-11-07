import { getContent, inquiryLink } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon, Reveal, SectionHeading } from "./UI";
export function Services() {
  const { language } = useLanguage();
  const { services } = getContent(language);
  return <section id="consulting" className="services light-section section-pad"><span id="services" className="anchor-alias" /><div className="container"><SectionHeading {...services} light /><div className="services-grid">{services.items.map((item, index) => <Reveal key={item.id} delay={index * 80} className="service-card"><div className="service-top"><Icon name={item.id} size={30} /><span>{item.number}</span></div><p className="service-name">{item.short}</p><h3>{item.title}</h3><p className="service-description">{item.description}</p><div className="deliverables"><p className="eyebrow">{services.deliverables}</p><ul>{item.deliverables.map(text => <li key={text}><Icon name="check" size={14} />{text}</li>)}</ul></div><a className="service-link" href={inquiryLink(language)} aria-label={`${services.cta}: ${item.short}`}><span>{services.cta}</span><Icon name="diagonal" size={19} /></a></Reveal>)}</div><p className="scope-note"><span className="status-dot" />{services.scope}</p></div></section>;
}
