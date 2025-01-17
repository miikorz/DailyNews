import React, { useState } from 'react';

interface Newsletter {
  id: number;
  title: string;
  content: string;
}

interface NewsletterFormProps {
  onSubmit: (newsletter: Newsletter) => void;
  newsletter?: Newsletter;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({
  onSubmit,
  newsletter,
}) => {
  const [title, setTitle] = useState(newsletter ? newsletter.title : '');
  const [content, setContent] = useState(newsletter ? newsletter.content : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNewsletter = {
      id: newsletter ? newsletter.id : Date.now(),
      title,
      content,
    };
    onSubmit(newNewsletter);
    setTitle('');
    setContent('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {newsletter ? 'Update Newsletter' : 'Create Newsletter'}
      </button>
    </form>
  );
};

export default NewsletterForm;
