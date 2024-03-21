import React from 'react';
import { FaBook, FaCalendarAlt, FaListUl, FaJournalWhills } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-[98%]  sm:w-[90%] md:w-[80%] bg-light-header dark:bg-dark-header fixed bottom-0  py-5 px-2 md:px-8 flex justify-between items-center ">
      {/* Notebook Panel */}
      <Link href='/' className=" text-gray-600 dark:text-gray-300 flex flex-col items-center">
        <FaBook size={22} />
        <h6 className='text'>Daybook</h6>
      </Link>
      {/* Calendar Panel */}
      <Link href='/' className=" text-gray-600 dark:text-gray-300 flex flex-col items-center">
        <FaCalendarAlt size={22} />
        <h6 className='text'>Calendar</h6>
      </Link>
      {/* To-Do Panel */}
      <Link href='/to-do' className=" text-gray-600 dark:text-gray-300 flex flex-col items-center">
        <FaListUl size={22}/>
        <h6 className='text'>To Do&apos;s</h6>
      </Link>
      {/* Journal Panel */}
      <Link href='/' className=" text-gray-600 dark:text-gray-300 flex flex-col items-center">
        <FaJournalWhills size={22}/>
        <h6 className='text'>My Journal</h6>
      </Link>
    </footer>
  );
};

export default Footer;
