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

  const projects = [
    { link: "/unit1", title: "Unit 1 - Online World", description: "College Exam Unit" },
    { link: "/unit2", title: "Unit 2 - Technology Systems", description: "College Exam Unit" },
    { link: "/unit3", title: "Unit 3 - Digital Portfolio", description: "College Assignment Unit" },
    { link: "/unit9", title: "Unit 9 - Spreadsheets", description: "College Assignment Unit" },
    { link: "/unit12", title: "Unit 12 - Software Development", description: "College Assignment Unit" },
    { link: "/unit14", title: "Unit 14 - Technology Systems", description: "College Assignment Unit" },
  ];

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar darkMode={darkMode} />

      <div className="container mx-auto py-8 px-4 pt-20 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((card, index) => (
            <Link to={card.link} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className={`rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer border shadow-md ${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'}`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-yellow-500">{card.description}</p>
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
