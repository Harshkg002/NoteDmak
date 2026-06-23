import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitUI';
import api from "../Libs/axios";
import toast from "react-hot-toast";
import NoteCard from '../components/NoteCard';
import NotesNotFound from '../components/NotesNotFound';

const HomePage = () => {
  const [isRateLimited, setIsRatelimited]=useState(false);
  const [notes,setNotes] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    const fetchnotes = async()=>{
      try {
        const res = await api.get("/notes")
        console.log(res.data);
        setNotes(res.data);
        setIsRatelimited(false);
      } catch (error) {
        console.log(error);
        if(error.response?.status === 429){
          setIsRatelimited(true);
        }else{
          toast.error(error.message)
        }
      }
      finally{
        setIsLoading(false);
      }
    }
    fetchnotes();
  },[])
  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI/>}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {isLoading && <h1 className='text-center text-primary py-10 text-lg'>Loading Notes...</h1>}
        {notes.length === 0 && !isLoading && <NotesNotFound/>}
        {notes.length >0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note=>(
              <NoteCard key={note._id} note={note} setNudes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage