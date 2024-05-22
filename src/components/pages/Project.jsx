import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar'

const ProjectPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar darkMode={darkMode} />

      {/* Content */}
      <div className="container mx-auto py-8 px-4 pt-20"> {/* Added pt-20 for top padding */}
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {/* Card 1 */}
          <Link to="/unit1">
            <div className="rounded-lg overflow-hidden bg-gray-800 transition duration-300 cursor-pointer border border-gray-700 shadow-md hover:bg-gray-700 hover:text-white">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Unit 1 - Online World</h3>
                <p className="text-yellow-500 text-gray-400">College Exam Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 2 */}
          <Link to="/unit2">
            <div className="rounded-lg overflow-hidden bg-gray-800 transition duration-300 cursor-pointer border border-gray-700 shadow-md hover:bg-gray-700 hover:text-white">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Unit 2 - Technology Systems</h3>
                <p className="text-yellow-500 text-gray-400">College Exam Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/unit3">
            <div className="rounded-lg overflow-hidden bg-gray-800 transition duration-300 cursor-pointer border border-gray-700 shadow-md hover:bg-gray-700 hover:text-white">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Unit 3 - Digital Portfolio</h3>
                <p className="text-yellow-500 text-gray-400">College Assignment Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/unit9">
            <div className="rounded-lg overflow-hidden bg-gray-800 transition duration-300 cursor-pointer border border-gray-700 shadow-md hover:bg-gray-700 hover:text-white">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Unit 9 - Spreadsheets</h3>
                <p className="text-yellow-500 text-gray-400">College Assignment Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/unit12">
            <div className="rounded-lg overflow-hidden bg-gray-800 transition duration-300 cursor-pointer border border-gray-700 shadow-md hover:bg-gray-700 hover:text-white">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Unit 12 - Software Development</h3>
                <p className="text-yellow-500 text-gray-400">College Assignment Unit</p>
              </div>
            </div>
          </Link>
          {/* Card 3 */}
          <Link to="/unit14">
            <div className="rounded-lg overflow-hidden bg-gray-800 transition duration-300 cursor-pointer border border-gray-700 shadow-md hover:bg-gray-700 hover:text-white">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">Unit 14 - Technology Systems</h3>
                <p className="text-yellow-500 text-gray-400">College Assignment Unit</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
