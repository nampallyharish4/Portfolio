import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-700">
        <Navigation />
        <main className="relative px-4 sm:px-8 lg:px-12">
          <Hero />
          <About />
          <TechnicalSkills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
