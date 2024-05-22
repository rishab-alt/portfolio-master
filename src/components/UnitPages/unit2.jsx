import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';

//https://www.svgrepo.com/show/420911/computer-hardware-internet.svg

const ProjectPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);


  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} min-h-screen flex flex-col`}>
      <Navbar darkMode={darkMode} />

      {/* Centered Card */}
      <div className="flex-grow flex flex-col justify-center items-center mt-16">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img className="w-full" src="https://www.svgrepo.com/show/420911/computer-hardware-internet.svg" alt="Landscape" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">Technology Systems</div>
            <p className="text-base text-gray-300">
            In this tech systems exam, we study component interactions, software types, and data processing in computer systems.            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
