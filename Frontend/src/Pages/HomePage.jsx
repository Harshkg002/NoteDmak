import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitUI';
import axios from "axios"

const HomePage = () => {
  const [isRateLimited, setIsRatelimited]=useState(false);
  const [notes,setNotes] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    const fetchnotes = async()=>{
      try {
        const res = await axios.get("http://localhost:5001/notes")
        console.log(res.data);
      } catch (error) {
        console.log("eror");
      }
    }
    fetchnotes();
  },[])
  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI/>}
    </div>
  );
}

export default HomePage