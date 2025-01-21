import React, { useEffect, useState } from 'react';
import useDebounce from '../customHooks/useDebounce';

interface NewsSearchProps {
  searchFeedsByTitle: (title: string | null) => void;
}

const NewsSearch: React.FC<NewsSearchProps> = ({ searchFeedsByTitle }) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    searchFeedsByTitle(debounceValue);
  }, [debounceValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="text"
        placeholder="Search by title!"
        value={searchValue ?? ''}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};

export default NewsSearch;
