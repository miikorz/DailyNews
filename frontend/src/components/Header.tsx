import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center w-fulL justify-between py-10">
      <div className="flex items-center justify-between">
        <div className="mr-3">LOGO</div>
        <div
          className="hidden cursor-pointer h-6 text-2xl font-semibold sm:block text-red-400 hover:text-red-500"
          onClick={() => navigate('/')}
        >
          Daily News
        </div>
      </div>
    </header>
  );
};

export default Header;
