import React, { useEffect, useState } from 'react';
import useFeedManagement from '../customHooks/useFeedManagement';
import Modal from '../ui/Modal';

const NewsletterList: React.FC = () => {
  const { getAllFeeds, feeds, deleteFeed } = useFeedManagement();
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

  return (
    <>
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

        return (
          // TODO: <a> can't be a child of another <a> element, fix it
          <a
            key={id}
            href={`/${id}`}
            className="flex flex-col md:flex-row group p-6 rounded-md text-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-gray-400"
          >
            <img
              className="h-48 md:w-48 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover"
              src={
                portrait ||
                'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
              }
              alt={title ?? ''}
            ></img>
            <div className="w-full p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="flex font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-500 dark:text-gray-40">{description}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-500 leading-none font-bold text-sm">
                    {author}
                  </p>
                  <a href={link ?? '#'}>{newsletter}</a>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-4 justify-end items-end">
              <button
                className="flex group-hover:flex sm:flex xs:flex md:hidden items-center justify-center w-4 h-6 text-white font-bold py-2 px-4 rounded"
                onClick={(e) => handleOnDeleteFeed(e, id!)}
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#f87171"
                  >
                    <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default NewsletterList;
