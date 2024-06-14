import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../NavBar';

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
<div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar  />

      {/* Content */}
      <div className="flex-grow flex flex-col justify-center items-center py-8 px-4 pt-20 transition-all duration-300 ease-in-out">
        <motion.div
          className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg text-center mb-8 p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl">
            Hello, I'm Rishab. I am a programmer and I mainly build projects using HTML, CSS, and PYTHON, as well as VISUAL BASIC. I like to contribute to GitHub projects and control planes on VATSIM.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg text-center p-6 md:p-8 transition-all duration-300 ease-in-out hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
          <ul className="list-disc list-inside text-left text-lg md:text-xl space-y-2">
            <li className="mb-2">GCSE'S</li>
            <li className="mb-2">BTEC First Certificate in IT and Creative Tech at The Manchester College</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
