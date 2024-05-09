import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can add further logic here to switch your dark mode classes
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      {/* Navigation Bar */}
      <nav className={`p-4 ${darkMode ? 'bg-gray-800' : 'bg-black'} text-white`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">My Portfolio</div>
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle Button */}
           
            <ul className="flex">
              <li className="mr-4">
                <Link to="/" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Home</Link>
              </li>
              <li className="mr-4">
                <Link to="/about" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>About</Link>
              </li>
              <li className="mr-4">
                <Link to="/projects" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Project</Link>
              </li>
              <li>
                <Link to="/contact" className={`hover:text-yellow-300 ${darkMode ? 'text-gray-300' : 'text-white'}`}>Contact</Link>
              </li>
            </ul>
            <button onClick={toggleDarkMode} className="px-3 py-1 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 focus:outline-none">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
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
          <Link to="/unit2">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:bg-gray-200 transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md`}>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Unit 2 - Technology Systems</h3>
                <p className={`text-gray-700 ${darkMode ? 'text-gray-400' : ''}`}>College Exam Unit </p>
              </div>
            </div>
          </Link>
          <Link to="/unit3">
            <div className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:bg-gray-200 transition duration-300 cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-md`}>
              <div className="p-6">
                <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Unit 3 - Digital Portfolio</h3>
                <p className={`text-gray-700 ${darkMode ? 'text-gray-400' : ''}`}>College Assignment Unit </p>
              </div>
            </div>
          </Link>
          {/* Add other cards similarly */}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
