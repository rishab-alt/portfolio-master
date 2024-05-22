import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../NavBar'

const ProjectPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);




  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar darkMode={darkMode} />


      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center mt-16">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img className="w-full" src="https://www.svgrepo.com/show/503798/world.svg" alt="Landscape" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">Online World</div>
            <p className="text-base text-gray-300">
              This is an exam unit in the online world. It involves learning about various aspects of the internet, including web development, cybersecurity, and digital marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;