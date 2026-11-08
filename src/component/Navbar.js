import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getContent } from "../content/siteContent";
import { Brand, Icon } from "./UI";
import { LanguageToggle } from "./LanguageToggle";
export default function NavBar() {
  const { language } = useLanguage();
  const { nav } = getContent(language);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef(null);
  useEffect(() => {
    const close = (event) => { if (open && event.key === "Escape") { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1001px)");
    const close = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", close);
    return () => media.removeEventListener("change", close);
  }, []);
  useEffect(() => {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: "-15% 0px -60% 0px" });
    document.querySelectorAll("main > section[id]").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const links = [["consulting", nav.consulting], ["work", nav.work], ["experience", nav.experience], ["contact", nav.contact]];
  return <header className="site-header"><div className="container header-inner"><Brand label={nav.home} /><nav aria-label={language === "en" ? "Main navigation" : "Navegación principal"} className={open ? "navigation is-open" : "navigation"} id="main-navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>{label}</a>)}</nav><div className="header-actions"><LanguageToggle /><a className="button button-header" href="#contact">{nav.cta}<Icon name="diagonal" size={16} /></a><button ref={toggle} className={`menu-button ${open ? "is-open" : ""}`} aria-label={open ? nav.close : nav.menu} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(v => !v)}><span /><span /></button></div></div></header>;
}
