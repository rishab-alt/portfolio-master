import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import ProjectPage from './components/Project';
import Unit1 from './components/unit1';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Unit9 from './components/unit9';
import Unit2 from './components/unit2'
import Unit12 from './components/unit12'
import Unit14 from './components/unit14'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/unit1" element={<Unit1 />} />
        <Route path="/unit2" element={<Unit2 />} />
        <Route path="/unit9" element={<Unit9 />} />
        <Route path="/unit12" element={<Unit12 />} />
        <Route path="/unit14" element={<Unit14 />} />
      </Routes>
    </Router>
  );
}

export default App;
