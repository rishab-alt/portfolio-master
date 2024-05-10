import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
          <Link to="/" className="text-yellow-500 text-3xl font-bold">My Portfolio</Link>
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Nav Links */}
          <div className="hidden md:flex md:items-center md:w-auto">
            <div className="text-lg">
              <Link to="/" className={`block mt-4 md:inline-block md:mt-0 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Home</Link>
              <Link to="/about" className={`block mt-4 md:inline-block md:mt-0 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>About</Link>
              <Link to="/projects" className={`block mt-4 md:inline-block md:mt-0 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Projects</Link>
              <Link to="/contact" className={`block mt-4 md:inline-block md:mt-0 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Contact</Link>
            </div>
          </div>
        </div>
        {/* Collapsible Menu */}
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'} text-center`}>
          <div className="text-lg">
            <Link to="/" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Home</Link>
            <Link to="/about" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>About</Link>
            <Link to="/projects" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Projects</Link>
            <Link to="/contact" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Contact</Link>
          </div>
        </div>
      </nav>
      {/* Content */}
      <div className="container mx-auto py-8 px-4">
        {/* Button for toggling light/dark mode */}
      
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Card 1 */}
          <Link to="/unit1">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md hover:bg-gray-700 hover:text-white`}>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : ''}`}>Unit 1 - Online World</h3>
                <p className={`text-yellow-500 ${darkMode ? 'text-gray-400' : 'text-black'}`}>College Exam Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link to="/unit2">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md hover:bg-gray-700 hover:text-white`}>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : ''}`}>Unit 2 - Technology Systems</h3>
                <p className={`text-yellow-500 ${darkMode ? 'text-gray-400' : 'text-black'}`}>College Exam Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/unit9">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md hover:bg-gray-700 hover:text-white`}>
              <div className="p-4">
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : ''}`}>Unit 9 - Spreadsheets</h3>
                <p className={`text-yellow-500 ${darkMode ? 'text-gray-400' : 'text-black'}`}>College Assignment Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 4 and more similar cards */}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
