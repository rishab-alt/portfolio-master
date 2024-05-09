import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card for Unit 1 */}
        <Link to="/unit1" className="rounded-lg overflow-hidden bg-white hover:bg-gray-200 transition duration-300 cursor-pointer border border-gray-200 shadow-md">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Unit 1 - Online World</h3>
            <p className="text-gray-700">Coming Soon!</p>
          </div>
        </Link>
        {/* You can add more cards for other units here */}
      </div>
    </div>
  );
}

export default ProjectPage;
