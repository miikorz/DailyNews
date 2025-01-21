import React, { useEffect, useState } from 'react';
import useFeedManagement from '../customHooks/useFeedManagement';
import Modal from '../ui/Modal';
import NewsSearch from './NewsSearch';

const NewsletterList: React.FC = () => {
  const { getAllFeeds, feeds, deleteFeed, searchFeedsByTitle } =
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
    location.href = `/${id}`;
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

        // TODO: move to utils
        const newsLetterPageUrl = `https://www.${newsletter?.split(' ').join('').replace('í', 'i')}.es`;

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
                  {/* // TODO: <a> can't be a child of another <a> element, fix it */}
                  <a href={newsLetterPageUrl} target="_blank" rel="noreferrer">
                    {newsletter}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-4 justify-end items-end">
              <button
                className="flex group-hover:flex sm:flex xs:flex md:hidden items-center justify-center w-4 h-6 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={(e) => handleOnEditFeed(e, id!)}
              >
                {/* TODO: Move svg to assets */}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                    fill="#f87171"
                  >
                    <path d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"></path>
                  </svg>
                </div>
              </button>
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
