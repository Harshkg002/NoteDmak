import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router';

const CreateNotePage = () => {
  const [title,setTitle]= useState("");
  const [content,setContent]=useState("");
  const [Loading,isLoading] = useState(false);

  const handleSubmit = () =>{

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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNotePage