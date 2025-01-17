import React from 'react';

interface Newsletter {
  id: number;
  title: string;
  content: string;
}

interface NewsletterItemProps {
  newsletter: Newsletter;
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
}

const NewsletterItem: React.FC<NewsletterItemProps> = ({
  newsletter,
  onDelete,
  onSelect,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{newsletter.title}</h2>
      <p className="text-gray-700 mb-4">{newsletter.content}</p>
      <div className="flex justify-between">
        <button
          onClick={() => onSelect(newsletter.id)}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          View Details
        </button>
        <button
          onClick={() => onDelete(newsletter.id)}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsletterItem;
