import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800 text-black`}>
      {/* Navigation */}
      <nav className={`bg-white shadow ${darkMode ? 'dark:bg-gray-900' : ''}`}>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link to="/" className="text-3xl font-bold">My Portfolio</Link>
          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
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
          {/* Dark Mode Toggle Button */}
          <button onClick={toggleDarkMode} className="px-3 py-1 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {/* Collapsible Menu */}
        <div className={`md:hidden ${showMenu ? 'block' : 'hidden'} text-center`}>
          <div className="text-lg">
            <Link to="/" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Home</Link>
            <Link to="/about" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>About</Link>
            <Link to="/projects" className={`block mt-4 mr-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Projects</Link>
            <Link to="/contact" className={`block mt-4 hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-black'}`}>Contact</Link>
          </div>
        </div>
      </nav>
      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <Link to="/unit1">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:bg-gray-200 transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md`}>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Unit 1 - Online World</h3>
                <p className={`text-gray-700 ${darkMode ? 'text-gray-400' : ''}`}>College Exam Unit </p>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link to="/unit9">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:bg-gray-200 transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md`}>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Unit 9</h3>
                <p className={`text-gray-700 ${darkMode ? 'text-gray-400' : ''}`}>College Exam Unit </p>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/unit3">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:bg-gray-200 transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md`}>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Unit 3 - Digital Portfolio</h3>
                <p className={`text-gray-700 ${darkMode ? 'text-gray-400' : ''}`}>College Assignment Unit </p>
              </div>
            </div>
          </Link>
          {/* Add more cards here */}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
