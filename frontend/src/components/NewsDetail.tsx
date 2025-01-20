import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFeedManagement from '../customHooks/useFeedManagement';
import Modal from '../ui/Modal';

const NewsDetail: React.FC = () => {
  const params = useParams<{ id: string }>();
  const [isCreateModalOpen, setisCreateModalOpen] = useState(false);
  const { getFeedById, feedData, setFeedData, updateFeed, createFeed } =
    useFeedManagement();

  useEffect(() => {
    const { id } = params;

    if (id) {
      getFeedById(id);
    }
  }, []);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    property: string
  ) => {
    setFeedData({
      ...feedData,
      [property]: e.target.value,
    });
  };

  const handleOnSubmit = () => {
    if (params.id) {
      updateFeed(params.id, feedData);
    } else {
      setisCreateModalOpen(true);
    }
  };

  return (
    <div className="flex-col">
      <div className="flex">
        <form className="w-full md:w-1/2">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-title"
                type="text"
                placeholder="News Title"
                value={feedData.title ?? ''}
                onChange={(e) => handleOnChange(e, 'title')}
              />
              {/* <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                placeholder="News Description"
                value={feedData.description ?? ''}
                onChange={(e) => handleOnChange(e, 'description')}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-link"
              >
                Link
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-link"
                type="text"
                placeholder="https://www.example.com"
                value={feedData.link ?? ''}
                onChange={(e) => handleOnChange(e, 'link')}
              />
              <p className="text-gray-600 text-xs italic">
                Please enter a full valid URL
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-newsletter"
              >
                Newsletter
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-newsletter"
                type="text"
                placeholder="Online Newsletter"
                value={feedData.newsletter ?? ''}
                onChange={(e) => handleOnChange(e, 'newsletter')}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-author"
              >
                Author
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-author"
                type="text"
                placeholder="John Doe"
                value={feedData.author ?? ''}
                onChange={(e) => handleOnChange(e, 'author')}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-portrait"
              >
                Portrait image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-portrait"
                type="text"
                placeholder="https://www.example.com"
                value={feedData.portrait ?? ''}
                onChange={(e) => handleOnChange(e, 'portrait')}
              />
              <p className="text-gray-600 text-xs italic">
                Please enter a full valid image URL
              </p>
            </div>
          </div>
        </form>

        <div className="flex flex-wrap p-6 md:w-1/2">
          <img
            src={
              feedData.portrait ||
              'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
            }
            alt={feedData.title ?? ''}
            className="w-full object-cover"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          className="shadow bg-pink-600 hover:bg-pink-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleOnSubmit}
        >
          {params.id ? 'Save' : 'Create'}
        </button>
      </div>
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setisCreateModalOpen(false)}
        onSubmit={() => createFeed(feedData)}
        title="Create new Feed"
        message="You are about to create a new Feed, are you sure?"
      />
    </div>
  );
};

export default NewsDetail;
