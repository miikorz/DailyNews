import React, { useEffect, useState } from 'react';
import useDebounce from '../customHooks/useDebounce';

interface NewsSearchProps {
  onSearch: (title: string | null) => void;
}

const NewsSearch: React.FC<NewsSearchProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    onSearch(debounceValue);
  }, [debounceValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      type="text"
      placeholder="Search by title!"
      value={searchValue ?? ''}
      onChange={(e) => handleOnChange(e)}
    />
  );
};

export default NewsSearch;
