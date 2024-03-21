import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="py-12 rounded-b-3xl rounded-t-lg px-4 md:px-8 flex justify-between items-center bg-light-header dark:bg-dark-header w-full">
      <h1 className='text-xl dark:text-white font-bold'>30-day-challenge</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 hidden sm:block py-2 mx-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:border-blue-300 dark:text-white dark:bg-gray-700"
        />
        <FaSearch size={22}/>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
