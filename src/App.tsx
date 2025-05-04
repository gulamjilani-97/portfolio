import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
// import Skills from './components/sections/Skills'; // Removed Skills import
import Projects from './components/sections/Projects';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-mono text-text-light dark:text-text-dark">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Skills /> Removed Skills component */}
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
