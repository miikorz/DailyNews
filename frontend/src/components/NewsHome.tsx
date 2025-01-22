import React from 'react';
import NewsletterList from './NewsList';

const NewsHome: React.FC = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Welcome to your main feed of news
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          A List of news created with React and Tailwind.css
        </p>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <NewsletterList />
      </ul>
    </div>
  );
};

export default NewsHome;
