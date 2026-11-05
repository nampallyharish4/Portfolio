import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import OtherProjects from './components/OtherProjects';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Education from './components/Education';

function App() {
  return (
    <ThemeProvider>
      <div className="site-shell">
        <Loader />
        <Cursor />
        <ScrollProgress />
        <Navigation />
        <main>
          <Hero />
          <About />
          <TechnicalSkills />
          <Projects />
          <OtherProjects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
