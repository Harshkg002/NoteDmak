import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import api from '../Libs/axios';


const CreateNotePage = () => {
  const [title,setTitle]= useState("");
  const [content,setContent]=useState("");
  const navigate = useNavigate();
  const [Loading,setLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    if(!title.trim() || !content.trim()){
      toast.error("All field are required!!");
      return;
    }
    setLoading(true)
    try {
      const tit=title.replace(/^./, char => char.toUpperCase());
      await api.post("/notes",{title:tit,content});
      toast.success("Note created successfully. :)")
      setTitle("");
      setContent("");
      //navigate("/")
    } catch (error) {
      console.log(error.message);
      if(error.response?.status === 429){
        setRateLimited(true);
          toast.error("Wait for this toast to disappear before trying again",{
            duration:4000,
            icon:"💀"
          })
          setTimeout(() => {
          setRateLimited(false);
          }, 4000); 
        }else{
          toast.error("Failed to create Note. :(");
        }

    } finally{ setLoading(false)}
  }
  return (
    <div className='min-h-screen '>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
          <Link to={"/"} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5'/>
            Back to note 
          </Link>
          <div className='card bg-base-100'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-4'>Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className='form-control mb-4'>
                  <label className="label">
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" 
                    placeholder='Note title' 
                    className='input input-bordered'
                    value={title} 
                    onChange={(e)=>setTitle(e.target.value)} />
                </div>

                <div className='form-control mb-4'>
                  <label className="label">
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea
                    placeholder='Write your note here...' 
                    className='textarea textarea-bordered h-32'
                    value={content} 
                    onChange={(e)=>setContent(e.target.value)} />
                </div>
                
                <div className="card-actions justify-end">
                  <button type='submit' className='btn btn-primary' disabled={Loading||rateLimited}>
                    {Loading? "Creating...": rateLimited
                    ? "Rate Limited": "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNotePage