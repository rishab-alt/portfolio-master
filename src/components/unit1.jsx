import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State to control the visibility of the menu

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode classes on the body element
    document.body.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800 text-black`}>
      {/* Navigation */}
      <nav className={`bg-white shadow ${darkMode ? 'dark:bg-gray-900' : ''}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className=" text-yellow-500 text-3xl font-bold">My Portfolio</Link>
          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {/* Nav Links */}
          <div className={`md:flex ${showMenu ? 'block' : 'hidden'}`}> {/* Show/hide based on menu state */}
            <div className="flex space-x-4">
              <Link to="/" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Home</Link>
              <Link to="/unit1" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Unit 1</Link>
              <Link to="/unit2" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Unit 2</Link>
              <Link to="/unit3" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Unit 3</Link>
              <Link to="/unit4" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Unit 4</Link>
              <Link to="/unit5" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Unit 5</Link>
              <Link to="/unit6" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Unit 6</Link>
            </div>
          </div>
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} className="px-3 py-1 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Centered Card */}
        <div className={`max-w-md mx-auto bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg ${darkMode ? 'dark:text-white' : ''}`}>
          <img className="w-full" src="https://www.svgrepo.com/show/503798/world.svg" alt="Landscape" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Online world</div>
            <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              This is an exam unit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
