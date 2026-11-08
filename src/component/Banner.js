import { lazy, Suspense, useEffect, useState } from "react";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./UI";

const ArchitectureScene = lazy(() => import("./ArchitectureScene"));

export default function Banner() {
  const { language } = useLanguage();
  const { hero, common } = getContent(language);
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [showArt, setShowArt] = useState(() => window.matchMedia("(min-width: 761px)").matches);
  const [paused, setPaused] = useState(false);
  const motionPaused = paused || reduced;

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const viewport = window.matchMedia("(min-width: 761px)");
    const updateMotion = () => setReduced(motion.matches);
    const updateArt = () => setShowArt(viewport.matches);

    motion.addEventListener("change", updateMotion);
    viewport.addEventListener("change", updateArt);
    return () => {
      motion.removeEventListener("change", updateMotion);
      viewport.removeEventListener("change", updateArt);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = motionPaused ? "paused" : "active";
  }, [motionPaused]);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker"><span className="status-dot" />{hero.eyebrow}</p>
          <h1 id="hero-title"><span>{hero.line1}</span>{" "}<span><em>{hero.line2}</em></span></h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-actions">
            <a href="./#contact" className="button button-accent">{common.project}<Icon name="diagonal" /></a>
            <a href="#work" className="text-link">{hero.secondary}<Icon /></a>
          </div>
        </div>
        {showArt && (
          <div className="hero-art">
            <div className="art-grid" />
            <Suspense fallback={null}>
              <ArchitectureScene paused={motionPaused} />
            </Suspense>
            {!reduced && (
              <div className="art-bottom">
                <button
                  className="motion-toggle"
                  onClick={() => setPaused(value => !value)}
                  aria-label={paused ? hero.resume : hero.pause}
                >
                  <Icon name={paused ? "play" : "pause"} size={15} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
