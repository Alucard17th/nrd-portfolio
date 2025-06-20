import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroA from './components/HeroA';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <>
    <Navbar />
    <main style={{ overflow: 'hidden' }}>
      {/* <Hero /> */}
      <HeroA />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;