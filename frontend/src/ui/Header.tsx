import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogiIcon from '../icons/LogoIcon';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center w-fulL justify-between py-10">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => navigate('/')}
      >
        <div className="mr-3">
          <LogiIcon />
        </div>
        <div className="hidden h-6 text-2xl font-semibold sm:block text-red-400 hover:text-red-500">
          Daily News
        </div>
      </div>
    </header>
  );
};

export default Header;
