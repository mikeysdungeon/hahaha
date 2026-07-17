import { useEffect } from "react";
import { site, sections } from "./content";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Skills from "./components/Skills.jsx";
import Media from "./components/Media.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Section registry: maps a section id (see src/content/config.js) to the
// component that renders it. To add a new section: create a component,
// register it here, then add an entry to `sections` in the config.
const REGISTRY = {
  about: About,
  experience: Experience,
  projects: Projects,
  achievements: Achievements,
  skills: Skills,
  media: Media,
  contact: Contact,
};

export default function App() {
  useEffect(() => {
    document.title = site.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", site.description);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        {sections.map(({ id, label }) => {
          const SectionComponent = REGISTRY[id];
          return SectionComponent ? (
            <SectionComponent key={id} id={id} title={label} />
          ) : null;
        })}
      </main>
      <Footer />
    </>
  );
}
