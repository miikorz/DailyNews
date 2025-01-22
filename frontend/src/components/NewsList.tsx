import React, { useEffect, useState } from 'react';
import useFeedManagement from '../customHooks/useFeedManagement';
import Modal from '../ui/Modal';
import NewsSearch from './NewsSearch';
import { useNavigate } from 'react-router-dom';
import EditIcon from '../assets/EditIcon';
import DeleteIcon from '../assets/DeleteIcon';
import { getNewsLetterPage } from '../utils/commonUtils';

const NewsletterList: React.FC = () => {
  const navigate = useNavigate();
  const { getAllFeeds, feeds, deleteFeed, searchFeedsByTitle, loading } =
    useFeedManagement();
  const [isDeleteModalOpen, setisDeleteModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState('');

  useEffect(() => {
    getAllFeeds();
  }, []);

  const handleOnDeleteFeed = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setisDeleteModalOpen(true);
    setIdToDelete(id);
  };

  const handleOnEditFeed = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    navigate(`/new/${id}`);
  };

  return (
    <>
      <div className="border-none">
        <NewsSearch searchFeedsByTitle={searchFeedsByTitle} />
      </div>
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setisDeleteModalOpen(false)}
        onSubmit={() => deleteFeed(idToDelete)}
        title="Delete Feed"
        message="Are you sure you want to delete this feed?"
      />
      {feeds?.map((feed) => {
        const {
          _id: id,
          author,
          description,
          link,
          title,
          newsletter,
          portrait,
        } = feed;

        const newsLetterPageUrl = getNewsLetterPage(newsletter);

        return (
          <a
            key={id}
            href={link!}
            target="_blank"
            className="flex flex-col md:flex-row group p-6 rounded-md text-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400"
            rel="noreferrer"
          >
            <img
              className="h-48 md:w-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover"
              src={
                portrait ||
                'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
              }
              alt={title ?? ''}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  'https://www.svgrepo.com/show/508699/landscape-placeholder.svg';
              }}
            ></img>
            <div className="w-full p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="flex font-bold text-xl mb-2 md:w-11/12">
                  {title}
                </div>
                <p className="text-gray-500 dark:text-gray-40">{description}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-500 leading-none font-bold text-sm">
                    {author}
                  </p>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(newsLetterPageUrl, '_blank');
                    }}
                  >
                    {newsletter}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-4 justify-end items-end">
              <button
                className="flex group-hover:flex sm:flex xs:flex md:hidden items-center justify-center w-4 h-6 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={(e) => handleOnEditFeed(e, id!)}
              >
                <div className="flex">
                  <EditIcon />
                </div>
              </button>
              <button
                className="flex group-hover:flex sm:flex xs:flex md:hidden items-center justify-center w-4 h-6 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => handleOnDeleteFeed(e, id!)}
              >
                <div className="flex">
                  <DeleteIcon />
                </div>
              </button>
            </div>
          </a>
        );
      })}
      {feeds?.length === 0 && !loading && (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 dark:text-gray-400">
            No feeds found, try another search
          </p>
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        </div>
      )}
    </>
  );
};

export default NewsletterList;
