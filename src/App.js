import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import ProjectPage from './components/Project';
import Unit1 from './components/unit1';
import AboutPage from './components/About';
import ContactPage from './components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/unit1" element={<Unit1 />} />
      </Routes>
    </Router>
  );
}

export default App;
