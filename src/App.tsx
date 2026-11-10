import { About } from './components/About';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact, Skills } from './components/SkillsContact';
import { useLang } from './i18n';

export default function App() {
  const { t } = useLang();
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <span id="top" />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer__inner wrap">
          <span>{t.footer.rights}</span>
          <span>{t.footer.place}</span>
        </div>
      </footer>
    </>
  );
}
