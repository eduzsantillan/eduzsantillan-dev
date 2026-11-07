import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon, Reveal, SectionHeading } from "./UI";
export function Process() {
  const { language } = useLanguage();
  const { process } = getContent(language);
  return <section id="process" className="process section-pad"><div className="container"><SectionHeading {...process} /><div className="process-grid">{process.steps.map((step, index) => <Reveal className="process-step" key={step.title} delay={index * 80}><div className="process-top"><span className="step-number">0{index + 1}</span>{index < 3 && <Icon size={18} />}</div><h3>{step.title}</h3><p>{step.description}</p><span className="step-output">{step.output}</span></Reveal>)}</div></div></section>;
}
