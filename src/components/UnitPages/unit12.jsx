import React, { useState, useEffect } from 'react';
import pdfUrl1 from '../Downloads/unit12/U12_Assignment1_Rish.pdf';
import pdfUrl2 from '../Downloads/unit12/U12_Assignment2_Rish.pdf';
import pdfUrl3 from '../Downloads/unit12/U12_Assignment3_Rish.pdf';
import pdfUrl4 from '../Downloads/unit12/U12_Assignment4_Rish.pdf';
import Navbar from '../NavBar'
import { motion } from 'framer-motion';

// https://www.svgrepo.com/show/420902/computer-hardware-monitor-2.svg

const DownloadPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);



  return (
    <div className={`bg-${darkMode ? 'black' : 'white'} text-${darkMode ? 'white' : 'black'} min-h-screen flex flex-col justify-center items-center`}>
      <Navbar darkMode={darkMode} />

      {/* Content */}
      <div className="container mx-auto py-[50px] flex flex-col md:flex-row">
        {/* Card Section */}
        <div className="w-full md:w-1/2 p-4">
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="p-4">
              <img className="w-full object-cover" src="https://www.svgrepo.com/show/420902/computer-hardware-monitor-2.svg" alt="Placeholder" />
              <div className="mt-4">
                <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.              </p>
              </div>
              <div className="mt-4">
                <a href={pdfUrl1} className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
                  Download Final Application Here!
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Downloads Section */}
        <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          {/* Assignment Cards */}
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 1</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href={pdfUrl1} className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
                  Download Link 1
                </a>
              </div>
            </div>
          </div>
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 2</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href={pdfUrl2} className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
                  Download Link 2
                </a>
              </div>
            </div>
          </div>
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 3</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href={pdfUrl3} className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
                  Download Link 3
                </a>
              </div>
            </div>
          </div>
          <div className={`max-w-lg mx-auto bg-${darkMode ? 'gray-800' : 'white'} rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Assignment 4</div>
              <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Click the link below to download.
              </p>
              <div className="mt-4">
                <a href={pdfUrl4} className="block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none">
                  Download Link 4
                </a>
              </div>
            </div>
          </div>
          {/* Add more cards here */}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
