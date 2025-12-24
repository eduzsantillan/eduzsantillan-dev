import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import { getContent } from "../content/siteContent";
import { useLanguage } from "../context/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const content = getContent(language);
  const { nav, contact } = content;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="navbar-brand" src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {nav.links.map((link) => (
                <Nav.Link
                  key={link.href}
                  href={link.href}
                  className={
                    activeLink === link.href.replace("#", "")
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink(link.href.replace("#", ""))}
                >
                  {link.label}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <LanguageToggle />
              <div className="social-icon">
                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon3} alt="GitHub" />
                </a>
              </div>
              <HashLink to="#contact">
                <button className="vvd">
                  <span>{nav.ctaLabel}</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
