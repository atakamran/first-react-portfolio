import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
    
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
