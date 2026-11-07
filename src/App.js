import "./App.css";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { getContent } from "./content/siteContent";
import NavBar from "./component/Navbar";
import Banner from "./component/Banner";
import { AudiencePaths } from "./component/AudiencePaths";
import { Services } from "./component/Services";
import { CaseStudies } from "./component/CaseStudies";
import { Process } from "./component/Process";
import { About } from "./component/About";
import { FAQ } from "./component/FAQ";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
function Website() {
  const { language } = useLanguage();
  return <><a className="skip-link" href="#main">{getContent(language).common.skip}</a><NavBar /><main id="main"><Banner /><AudiencePaths /><Services /><CaseStudies /><Process /><About /><FAQ /><Contact /></main><Footer /></>;
}
export default function App() { return <LanguageProvider><Website /></LanguageProvider>; }
