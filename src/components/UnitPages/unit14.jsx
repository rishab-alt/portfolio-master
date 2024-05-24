import React, { useState, useEffect } from 'react';
import pdfUrl1 from '../Downloads/unit14/U14_Assignment1_Rish.pdf';
import pdfUrl2 from '../Downloads/unit14/U14_Assignment2_Rish.pdf';
import pdfUrl3 from '../Downloads/unit14/U14_Assignment3_Rish.pdf';
import pdfUrl4 from '../Downloads/unit14/U14_Assignment4_Rish.pdf';
import Navbar from '../NavBar';

const DownloadPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`bg-black text-white min-h-screen flex flex-col justify-center items-center`}>
      <Navbar darkMode={darkMode} />
      <div className="container mx-auto py-[50px] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <div className={`max-w-lg mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4`}>
            <div className="p-4">
              <img className="w-full object-cover" src="https://www.svgrepo.com/show/420902/computer-hardware-monitor-2.svg" alt="Placeholder" />
              <div className="mt-4">
                <p className={`text-base text-gray-300`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 overflow-y-auto">
          {[pdfUrl1, pdfUrl2, pdfUrl3, pdfUrl4].map((url, index) => (
            <div key={index} className={`max-w-lg mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg mb-4`}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Assignment {index + 1}</div>
                <p className={`text-base text-gray-300`}>
                  Click the link below to download.
                </p>
                <div className="mt-4">
                  <a href={url} className={`block text-base py-2 px-4 bg-yellow-500 text-black rounded-md shadow-md hover:bg-yellow-400 focus:outline-none`}>
                    Download Link {index + 1}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
