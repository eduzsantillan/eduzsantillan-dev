import { useState } from "react";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon, Reveal } from "./UI";

function WorkArt({ type }) {
  return <div className={`work-art work-art-${type}`} aria-hidden="true"><div className="work-art-grid" />{type === "identity" ? <div className="identity-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-icon"><Icon name="identity" size={58} /></div><i className="orbit-dot dot-one" /><i className="orbit-dot dot-two" /></div> : type === "payments" ? <div className="payments-art"><span className="payment-node node-left"><Icon name="payments" size={24} /></span><div className="payment-path" /><span className="payment-core"><Icon name="payments" size={44} /></span><span className="payment-node node-right"><Icon name="check" size={24} /></span><i className="flow-particle" /></div> : <div className="layers-art"><span /><span /><span /><span /></div>}<div className="work-art-footer"><span>{type === "identity" ? "IDENTITY / TRUST" : type === "payments" ? "SYSTEMS / CONNECTION" : "STRUCTURE / CLARITY"}</span><span>0{type === "identity" ? "1" : type === "payments" ? "2" : "3"}</span></div></div>;
}

export function CaseStudies() {
  const { language } = useLanguage();
  const { work } = getContent(language);
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="work" className="work section-pad">
      <span id="case-studies" className="anchor-alias" />
      <div className="container">
        <h2 className="compact-heading">{work.title}</h2>
        <div className="work-grid">
          {work.items.map((item, index) => {
            const isExpanded = expanded === item.slug;
            const detailId = `case-${item.slug}`;

            return (
              <Reveal key={item.slug} delay={index * 60} className="work-card">
                <WorkArt type={item.type} />
                <div className="work-card-body">
                  <h3>{item.title}</h3>
                  <p className="work-summary">{item.summary}</p>
                  <button
                    className="case-toggle"
                    aria-expanded={isExpanded}
                    aria-controls={detailId}
                    onClick={() => setExpanded(isExpanded ? null : item.slug)}
                  >
                    <span>{isExpanded ? work.close : work.open}</span><Icon name="plus" size={18} />
                  </button>
                  <div className="case-detail" id={detailId} hidden={!isExpanded}>
                    <p>{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
