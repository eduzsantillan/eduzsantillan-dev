import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon, Reveal } from "./UI";
export function FAQ() {
  const { language } = useLanguage();
  const { faq } = getContent(language);
  return <section className="faq light-section section-pad" aria-labelledby="faq-title"><div className="container faq-layout"><Reveal><p className="eyebrow">{faq.eyebrow}</p><h2 id="faq-title">{faq.title}</h2></Reveal><div>{faq.items.map(item => <details key={item.question} className="faq-item"><summary>{item.question}<Icon name="plus" size={18} /></summary><p>{item.answer}</p></details>)}</div></div></section>;
}
