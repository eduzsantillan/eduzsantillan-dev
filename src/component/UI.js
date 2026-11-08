import { useEffect, useRef } from "react";
export function Icon({ name = "arrow", size = 20, ...props }) {
  const paths = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    diagonal: <><path d="M6 18 18 6M6 6h12v12" /></>,
    down: <><path d="M12 4v16M6 14l6 6 6-6" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></>,
    identity: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6z" /><path d="m8 12 3 3 5-6" /></>,
    payments: <><path d="M3 7h16m-4-4 4 4-4 4M21 17H5m4-4-4 4 4 4" /></>,
    modernization: <><path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M15 8V4H4v11h4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    pause: <><path d="M9 5v14M15 5v14" /></>,
    play: <path d="m8 5 11 7-11 7z" />,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>;
}
export function Reveal({ children, className = "", delay = 0, ...props }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.classList.add("reveal-ready");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add("is-visible"); observer.unobserve(element); }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className} style={{ "--reveal-delay": `${delay}ms` }} {...props}>{children}</div>;
}
export function Brand({ label }) {
  return <a className="brand" href="#home" aria-label={label}><span className="brand-symbol" aria-hidden="true">e<span>z</span><i /></span><span>EDUARDO<br />ZUÑIGA<span className="brand-dot">.</span></span></a>;
}
