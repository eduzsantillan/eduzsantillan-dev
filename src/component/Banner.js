import { lazy, Suspense, useEffect, useState } from "react";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./UI";
const ArchitectureScene = lazy(() => import("./ArchitectureScene"));
export default function Banner() {
  const { language } = useLanguage();
  const { hero, common } = getContent(language);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = () => setReduced(media.matches);
    media.addEventListener("change", listener); return () => media.removeEventListener("change", listener);
  }, []);
  useEffect(() => { document.documentElement.dataset.motion = paused || reduced ? "paused" : "active"; }, [paused, reduced]);
  return <section className="hero" id="home" aria-labelledby="hero-title"><div className="container hero-container"><div className="hero-topline"><span className="eyebrow"><i className="status-dot" />{hero.eyebrow}</span><span className="hero-edition">JAVA / FINTECH / ENTERPRISE</span></div><div className="hero-layout"><div className="hero-copy"><h1 id="hero-title"><span>{hero.line1}</span><span>{hero.line2} <em>{hero.accent}</em></span></h1><p className="hero-description">{hero.description}</p><div className="hero-actions"><a href="#experience" className="button button-accent">{hero.secondary}<Icon /></a><a href="?intent=project#contact" className="text-link">{common.project}<Icon name="diagonal" /></a></div><p className="hero-note"><span />{hero.note}</p></div><div className="hero-art"><div className="art-grid" /><div className="art-coordinates"><span>FIG. 01</span><span>ENGINEERING / IN MOTION</span></div><Suspense fallback={<div className="scene-loading" />}><ArchitectureScene paused={paused || reduced} /></Suspense><div className="art-label"><span className="art-label-marker" /><div><strong>{hero.sceneLabel}</strong><span>{hero.sceneCaption}</span></div></div><div className="art-bottom"><span>{hero.sceneHint}<span aria-hidden="true"> ↗</span></span><button className="motion-toggle" onClick={() => setPaused(value => !value)} disabled={reduced} aria-label={paused || reduced ? hero.resume : hero.pause} aria-pressed={paused || reduced}><Icon name={paused || reduced ? "play" : "pause"} size={15} /></button></div></div></div><div className="hero-bottom"><a href="#consulting" className="scroll-link"><Icon name="down" size={16} />{hero.scroll}</a><span>JAVA · FINTECH · ENTERPRISE</span></div></div><div className="expertise-strip"><div className="container">{hero.domains.map((domain, index) => <span key={domain}><i>{String(index + 1).padStart(2, "0")}</i>{domain}<span className="strip-star" aria-hidden="true">✳</span></span>)}</div></div></section>;
}
