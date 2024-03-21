'use client'
import React from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import entries from "../../../lib/data.json";
import { useParams } from 'next/navigation';

function Entry() { 
  const { id } = useParams();
  const router = useRouter();
  
  // Find the entry with the given ID
  const entry = entries.find(entry => entry.id.toString() === id);

  // If the entry is not found, redirect to home page or display a message
  if (!entry) {
    // You can redirect to the home page or display a message
    // router.push("/");
    return <p>Entry not found</p>;
  }

  // Format the date
  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='min-h-screen mx-2 md:mx-10 mt-8'>
        <div className='min-h-screen mx-2 md:mx-10 mt-8'>
          <div>
            <div className='border-b border-gray-500 flex justify-between items-center'>
              {/* Date and Time */}
              <div className=' text-2xl md:text-3xl font-semibold text-blue-600'>
                <span className="block">{formattedDate}</span>
              </div>
              {/* Edit and Delete icons */}
              <div className='flex gap-6'>
                <FaEdit className='text-blue-500' size={26} />
                <AiFillDelete className='text-red-500' size={26} />
              </div>
            </div>
            {/* Title */}
            <h1 className='text-2xl font-semibold mt-4 '>{entry.title}</h1>
          </div>

          {/* Entry content */}
          <div className="mt-4 text-lg dark:text-gray-400">
            {entry.content}
          </div>
        </div>
    </div>
  );
}

export default Entry;
