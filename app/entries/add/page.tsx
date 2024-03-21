'use client'
import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { BsCheck2 } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import supabase from "../../../lib/supabase"
import { useRouter } from 'next/navigation';

function InputEntry() {
  const route= useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Generate current date, time, and day
  const currentDate = new Date().toLocaleDateString('en-US', {  year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
  const currentTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });


  const handleInputChange = (e:any) => {
    if (e.target.name === 'title') {
      console.log(e.target.value);
      
      setTitle(e.target.value);
    } else if (e.target.name === 'content') {
      setContent(e.target.value);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Check if title or content is null
      if (!title || !content) {
        // Prompt user to input if title or content is null
        alert('Please fill in both title and content fields.');
        return;
      }
  
      const { data, error } = await supabase
        .from('entries')
        .insert([{ title, content, date: currentDate, time: currentTime }]);
      
      if (error) {
        throw error;
      }
      
      console.log('Data submitted successfully:', data);
      // Reset input fields after submission
      setTitle('');
      setContent('');
      route.push('/')
    } catch (error: any) {
      console.error('Error submitting data:', error.message);
    }
  };
  


  return (
    <div className='min-h-screen mx-2 md:mx-10 mt-8'>
      <div>
        <div className='border-b border-gray-500 flex justify-between items-center'>
          {/* Date and Time */}
          <div className='text-3xl font-semibold text-blue-600'>
            <span className="block">{currentDate}</span>
            <h5 className="text-base font-normal text-gray-500">{currentTime}</h5>
          </div>
          {/* Edit and Delete icons (Hidden for input) */}
          <div className='flex gap-6 opacity-0 pointer-events-none'>
            <FaEdit className='text-blue-500' size={26} />
            <AiFillDelete className='text-red-500' size={26} />
          </div>
        </div>
        {/* Input fields for Title and Content */}
        <input
          type="text"
          name="title"
          placeholder="Enter title..."
          value={title}
          onChange={handleInputChange}
          className="text-2xl font-semibold mt-4 bg-transparent outline-none  w-full"
        />
        <textarea
          name="content"
          placeholder="Enter content..."
          value={content}
          onChange={handleInputChange}
          className="mt-4  dark:text-gray-400 bg-transparent outline-none border-b border-gray-500 w-full"
          rows={30}
        />
      </div>
      <div className="fixed bottom-24 right-[12%]">
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none" onClick={handleSubmit}>
          <BsCheck2 size={22} className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default InputEntry;
