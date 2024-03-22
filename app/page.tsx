'use client'
// import Link from "next/link";
// import { FaPlus } from "react-icons/fa";
// import { useRouter } from 'next/navigation';
// import entries from "../lib/data.json";

// interface Entry {
//   id: number;
//   date: string;
//   title: string;
//   content: string;
// }

// const Home: React.FC = () => {
//   const router = useRouter();

//   const handleEntryClick = (id: number) => {
//     router.push(`/entries/${id}`);
//   };

//   const truncateContent = (content: string): string => {
//     const words = content.split(' ');
//     if (words.length > 20) {
//       return words.slice(0, 20).join(' ') + '...';
//     }
//     return content;
//   };

//   return (
//     <div className="w-full max-w-[800px] px-6 min-h-screen">
//       {entries.map((entry: Entry, id: number) => (
//         <div key={id} className="border-b border-gray-300 py-4" onClick={() => handleEntryClick(entry.id)}>
//           <div className="cursor-pointer">
//             <p className="text-gray-600">{entry.date}</p>
//             <p className="font-bold">{entry.title}</p>
//             <p>{truncateContent(entry.content)}</p>
//           </div>
//         </div>
//       ))}
//       <div className="fixed bottom-24 right-[12%]">
//         <Link href="/entries/add" passHref>
//           <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none">
//             <FaPlus className="w-6 h-6" />
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useState, useEffect } from 'react';
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import supabase from "../lib/supabase"

interface Entry {
  id: number;
  date: string;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('entries').select('*').order('date', { ascending: false });
      if (error) {
        throw error;
      }
      if (data) {
        setEntries(data);
      }
    } catch (error: any) {
      console.error('Error fetching entries:', error.message);
      setError(true);
    }
    finally{
      setLoading(false);
    }

  };

  const handleEntryClick = (id: number) => {
    router.push(`/entries/${id}`);
  };

  const truncateContent = (content: string): string => {
    const words = content.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return content;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
};
 

  return (
    <div className="w-full md:max-w-[70vw]  px-6 min-h-screen mb-20">
      {loading ? (
        <div className="flex items-center min-h-[70vh] justify-center">Loading...</div>
      ) : error ? (
        <div className="flex items-center min-h-[70vh] justify-center text-center max-w-[90vw] md:max-w-[50vw] mx-auto">Whoops! Looks like our server is taking a coffee break ☕. Hang tight while we whip up some digital magic. Your entry will be served shortly!{error}</div>
      ) : ( 
        <div>
            {entries.map((entry: Entry) => (
                <div key={entry.id} className="border-b border-gray-300 py-4" onClick={() => handleEntryClick(entry.id)}>
                  <div className="cursor-pointer">
                    <p className="text-gray-600">{formatDate(entry.date)}</p>
                    <p className="font-bold">{entry.title}</p>
                    <p>{truncateContent(entry.content)}</p>
                  </div>
                </div>
         ))}
        </div>
      )}

      <div className="fixed bottom-24 right-[12%]">
        <Link href="/entries/add" passHref>
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 focus:outline-none">
            <FaPlus className="w-6 h-6" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
