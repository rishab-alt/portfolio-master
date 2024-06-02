import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar';
import { motion } from 'framer-motion';

const ProjectPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeInOut'
      },
    }),
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <Navbar darkMode={darkMode} />

      <div className="container mx-auto py-8 px-4 pt-20 transition-all duration-300 ease-in-out">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[
            { link: "/unit1", title: "Unit 1 - Online World", description: "College Exam Unit" },
            { link: "/unit2", title: "Unit 2 - Technology Systems", description: "College Exam Unit" },
            { link: "/unit3", title: "Unit 3 - Digital Portfolio", description: "College Assignment Unit" },
            { link: "/unit9", title: "Unit 9 - Spreadsheets", description: "College Assignment Unit" },
            { link: "/unit12", title: "Unit 12 - Software Development", description: "College Assignment Unit" },
            { link: "/unit14", title: "Unit 14 - Technology Systems", description: "College Assignment Unit" },
          ].map((card, index) => (
            <Link to={card.link} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="rounded-lg overflow-hidden bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer border border-gray-700 shadow-md hover:bg-gray-700 hover:text-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white">{card.title}</h3>
                  <p className="text-yellow-500 text-gray-400">{card.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
