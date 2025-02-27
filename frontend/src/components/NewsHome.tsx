import React from 'react';
import NewsList from './NewsList';

const NewsHome: React.FC = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Welcome to your main feed of news
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Stop wasting time searching for news. Get all the news you need in
          one!
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <NewsList />
      </ul>
    </div>
  );
};

export default NewsHome;
