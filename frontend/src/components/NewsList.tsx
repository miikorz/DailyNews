import React, { useEffect } from 'react';
import useFeedManagement from '../customHooks/useFeedManagement';
import Tag from './Tag';

const NewsletterList: React.FC = () => {
  const { getAllFeeds, feeds } = useFeedManagement();

  useEffect(() => {
    getAllFeeds();
  }, []);

  return (
    <>
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
          // first version
          // <li key={id} className="py-12">
          //   <article>
          //     <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          //       <dl>
          //         <dt className="sr-only">Written by</dt>
          //         <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          //           {author}
          //         </dd>
          //       </dl>
          //       <div className="space-y-5 xl:col-span-3">
          //         <div className="space-y-6">
          //           <div>
          //             <h2 className="text-2xl font-bold leading-8 tracking-tight">
          //               <a
          //                 href={`/${id}`}
          //                 className="text-gray-900 dark:text-gray-100"
          //               >
          //                 {title}
          //               </a>
          //             </h2>
          //             <div className="flex flex-wrap">
          //               <Tag text={newsletter ?? ""} />
          //             </div>
          //           </div>
          //           <div className="prose max-w-none text-gray-500 dark:text-gray-400">
          //             {description}
          //           </div>
          //         </div>
          //         <div className="text-base font-medium leading-6">
          //           <a
          //             href={link ?? '#'}
          //             className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          //             aria-label={`Read more: "${title}"`}
          //           >
          //             Read more &rarr;
          //           </a>
          //         </div>
          //       </div>
          //     </div>
          //   </article>
          // </li>
          // second version
          <div key={id} className="max-w-sm w-full lg:max-w-full lg:flex p-6">
            <img
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden object-cover"
              src={
                portrait ||
                'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
              }
              alt={title ?? ''}
            ></img>
            <div className="p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <a className="font-bold text-xl mb-2" href={`/${id}`}>
                  {title}
                </a>
                <p className="max-w-none text-gray-500 dark:text-gray-40">
                  {description}
                </p>
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
          </div>
        );
      })}
    </>
  );
};

export default NewsletterList;
