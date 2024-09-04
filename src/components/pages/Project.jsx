import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar";
import { motion } from "framer-motion";

const ProjectPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const projects = [
    {
      link: "/unit1",
      title: "Unit 1 - Online World",
      description: "College Exam Unit",
    },
    {
      link: "/unit2",
      title: "Unit 2 - Technology Systems",
      description: "College Exam Unit",
    },
    {
      link: "/unit3",
      title: "Unit 3 - Digital Portfolio",
      description: "College Assignment Unit",
    },
    {
      link: "/unit9",
      title: "Unit 9 - Spreadsheets",
      description: "College Assignment Unit",
    },
    {
      link: "/unit12",
      title: "Unit 12 - Software Development",
      description: "College Assignment Unit",
    },
    {
      link: "/unit14",
      title: "Unit 14 - Technology Systems",
      description: "College Assignment Unit",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <Navbar />

      <div className="container mx-auto py-8 px-4 pt-20 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((card, index) => (
            <Link to={card.link} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="rounded-lg overflow-hidden transition-all duration-300 ease-in-out cursor-pointer border shadow-md bg-gray-800 focus:outline-none"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
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
