import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LanguageProvider } from "./context/LanguageContext";
import NavBar from "./component/Navbar";
import Banner from "./component/Banner";
import { TrustBar } from "./component/TrustBar";
import { ResultsStrip } from "./component/ResultsStrip";
import { Services } from "./component/Services";
import { CaseStudies } from "./component/CaseStudies";
import { Process } from "./component/Process";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <TrustBar />
        <ResultsStrip />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
