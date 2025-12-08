import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Process from './components/Process';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-text bg-bg selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Process />
        <Quality />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
