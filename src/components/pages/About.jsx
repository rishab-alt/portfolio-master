import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <Navbar darkMode={darkMode} />

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center py-8 px-4 pt-16 transition-all duration-300 ease-in-out">
        <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg text-center mb-8 p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl">
            I'm passionate about coding and creating innovative solutions. With a background in web development, I strive to continuously learn and improve my skills. My goal is to contribute to meaningful projects and make a positive impact in the tech community.
          </p>
        </div>

        {/* Education Section */}
        <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg text-center p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
          <ul className="list-disc list-inside text-left text-lg md:text-xl">
            <li className="mb-2">GCSE'S</li>
            <li className="mb-2">BTEC First Certificate in IT and Creative Tech at The Manchester College</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
