import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center w-full bg-white dark:bg-gray-950 justify-between py-10">
      <a href="/" aria-label="Daily News">
        <div className="flex items-center justify-between">
          <div className="mr-3">LOGO</div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">
            Daily News
          </div>
        </div>
      </a>
    </header>
  );
};

export default Header;
