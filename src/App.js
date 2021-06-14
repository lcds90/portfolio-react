import React from 'react'
import Home from './components/Home';
import About from './components/About';

import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Contact />
      <About />
      <Projects />
    </div>
  );
}

export default App;
