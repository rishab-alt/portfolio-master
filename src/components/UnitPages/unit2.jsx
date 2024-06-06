import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Navbar from '../NavBar';

//https://www.svgrepo.com/show/420911/computer-hardware-internet.svg
//          In this tech systems exam, we study component interactions, software types, and data processing in computer systems.            </p>


const ProjectPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);


  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar darkMode={darkMode} />

       {/* Content */}
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col justify-center items-center pt-20" // Adjust this padding-top value as needed
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
              <img className="w-full" src="https://www.svgrepo.com/show/420911/computer-hardware-internet.svg" alt="Landscape" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl text-white mb-2">Technology Systems</div>
                <p className="text-base text-gray-300">
                Technology systems have evolved over the last century and as they were being built, more technology made things possible. We go though the hardware components needed to run a technology system (e.g. computer). We also get an understanding of how the data flows between the components and how data is processed. Then we discuss the types of software needed in an operating system such as the bios in a computer, or a disk defragmenter.</p>
              </div>
            </div>
          </div>

        </motion.div>

      </motion.div>
    </div>
  );
}

export default ProjectPage;
