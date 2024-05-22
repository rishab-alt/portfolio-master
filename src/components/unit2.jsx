import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';

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
      <div className="flex-grow flex flex-col justify-center items-center mt-20">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img className="w-full mb-0" src="https://www.svgrepo.com/show/420911/computer-hardware-internet.svg" alt="Landscape" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Technology Systems</div>
            <p className="text-base text-gray-300">
              This is an exam unit on technology systems. In this unit, we learn how components of a technology system work together as well as understand different types of software.
              Additionally, we learn how data flows between the internal components of a computer system and how it is processed to provide information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
