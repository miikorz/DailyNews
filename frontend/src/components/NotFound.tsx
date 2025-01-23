import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="shadow bg-pink-600 hover:bg-pink-500 focus:shadow-outline focus:outline-none text-white hover:text-white font-bold py-2 px-4 rounded mb-4"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
