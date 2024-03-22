
"use client"
import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useRouter, useParams } from 'next/navigation';
import supabase from '@/lib/supabase';

interface Entry {
  id: number;
  date: string;
  title: string;
  content: string;
}

function Entry() {
  const { id } = useParams<{ id: string }>(); // Type for id param
  const router = useRouter();
  const [entry, setEntry] = useState<Entry | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchEntry = async () => {
      try {
        const { data, error } = await supabase
          .from('entries') // Replace with your table name
          .select('*')
          .eq('id', parseInt(id!)); // Type-safe conversion to number

        if (error) throw error;

        setEntry(data[0]); // Assuming single entry per ID
      } catch (error) {
        console.error('error fetching entry:', error);
        setError(true);
      }
      setLoading(false); // Set loading state to false after fetching entry
    };

    fetchEntry();
  }, [id]); // Dependency array to trigger fetch on ID change

  if (!entry) return <div className='min-h-[70vh] flex items-center justify-center'>Loading...</div>; // Handle loading state
  // if (!error) return <div className='min-h-[70vh] flex items-center justify-center'>Oops something went erong when fetching your entry...{error}</div>;
  // if (!loading) return <div className='min-h-[70vh] flex items-center justify-center'>Oops something went erong when fetching your entry...{error}</div>;

  const formattedDate = new Date(entry.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className='min-h-screen mx-2 md:mx-10 mt-8'>
      {loading ? (
        <div className='flex items-center justify-center'>Loading...</div>
      ) : error ? (
          <div className='flex items-center justify-center'>Oops something went erong when fetching your entry...{error}</div>
      ):(
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
          {/* Entry content */}
          <div className="mt-4 text-lg dark:text-gray-400">
            {entry.content}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Entry;





// export funtion of fetching the data
// export async function fetchEntries(id:number) {
//     const { data: entries, error } = await supabase
//     .from('entries')
//     .select('*')
//     .eq('id', id);

//   if (error) {
//     console.error(error);
//     return [];
//   }

//   return entries;
// }







  // const entry = entries.find(entry => entry.id.toString() === id);

  // // If the entry is not found, redirect to home page or display a message
  // if (!entries) {
  //   // You can redirect to the home page or display a message
  //   // router.push("/");
  //   return <p>Entry not found</p>;
  // }



// const [entries, setEntries] = React.useState([]);

//   const fetchEntries = async (id:number) => {
//     try {
//       const { data, error } = await supabase
//         .from('entries')
//         .select('*')
//         .eq('id', id); // Add this line to filter by id
//       if (error) {
//         throw error;
//       }
//       if (data) {
//         setEntries(data);
//       }
//     } catch (error) {
//       console.error('Error fetching entries:', error.message);
//     }
//   };

//   useEffect(() => {
//     // Call fetchEntries when the component mounts
//     fetchEntries(id);
//   }, [id]);