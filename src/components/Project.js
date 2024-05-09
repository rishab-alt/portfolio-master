import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">My Portfolio</div>
          <ul className="flex">
            <li className="mr-4">
              <Link to="/" className="hover:text-yellow-300">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-yellow-300">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/path/to/logo.png" alt="Logo" className="h-16" />
        </div>

        {/* Card for Unit 1 */}
        <Link to="/unit1" className="rounded-lg overflow-hidden bg-white hover:bg-gray-200 transition duration-300 cursor-pointer border border-gray-200 shadow-md">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Unit 1 - Online World</h3>
            <p className="text-gray-700">Coming Soon!</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectPage;
