import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Music } from './components/Music';
import { Gallery } from './components/Gallery';
import { Videos } from './components/Videos';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      <Navbar />
      <Hero />
      <Music />
      <Gallery />
      <Videos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 