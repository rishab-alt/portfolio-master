import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/Home';
import ProjectPage from './components/pages/Project';
import Unit1 from './components/UnitPages/unit1';
import AboutPage from './components/pages/About';
import ContactPage from './components/pages/Contact';
import Unit9 from './components/UnitPages/unit9';
import Unit2 from './components/UnitPages/unit2'
import Unit12 from './components/UnitPages/unit12'
import Unit14 from './components/UnitPages/unit14'
import Unit3 from './components/UnitPages/unit3'
import Timeline from './components/pages/TimeLine'
import NotFound from './components/pages/NotFound'

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
        <Route path="/unit3" element={<Unit3 />} />
        <Route path="/unit9" element={<Unit9 />} />
        <Route path="/unit12" element={<Unit12 />} />
        <Route path="/unit14" element={<Unit14 />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
