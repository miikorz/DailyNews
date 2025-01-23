import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MultiToolIcon from '../icons/MultiToolIcon';
import MoonIcon from '../icons/MoonIcon';
import SunIcon from '../icons/SunIcon';
import AddIcon from '../icons/AddIcon';

const MultiTool: React.FC = () => {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  return (
    <div className="group fixed bottom-4 right-6 p-2 flex items-end justify-end w-24 h-24 ">
      <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-red-400 to-red-500 z-50 absolute  ">
        <MultiToolIcon />
      </div>
      <div
        id="dark-mode-button"
        className="absolute cursor-pointer rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-red-400 hover:bg-red-500 text-white"
        onClick={darkModeHandler}
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </div>
      <div
        id="add-button"
        className="absolute cursor-pointer rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-red-400 hover:bg-red-500 text-white"
        onClick={() => {
          navigate('/add');
        }}
      >
        <AddIcon />
      </div>
    </div>
  );
};

export default MultiTool;
