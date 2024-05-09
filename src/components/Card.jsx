import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link }) => {
  return (
    <Link to={link} className="rounded-lg overflow-hidden bg-white hover:bg-gray-200 transition duration-300 cursor-pointer border border-gray-200 shadow-md">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </Link>
  );
}

export default Card;
