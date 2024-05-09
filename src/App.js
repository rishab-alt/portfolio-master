import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import ProjectPage from './components/Project';
import Unit1 from './components/unit1'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/unit1" element={<Unit1 />} />
      </Routes>
    </Router>
  );
}

export default App;
