import "./App.css";
import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { getContent } from "./content/siteContent";
import NavBar from "./component/Navbar";
import Banner from "./component/Banner";
import { Services } from "./component/Services";
import { CaseStudies } from "./component/CaseStudies";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";

function Website() {
  const { language } = useLanguage();

  useEffect(() => {
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView?.({ behavior: "instant" });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">{getContent(language).common.skip}</a>
      <NavBar />
      <main id="main">
        <Banner />
        <Services />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <LanguageProvider><Website /></LanguageProvider>;
}
