import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router'
import { formateDate } from '../Libs/DateFromat';
import toast from 'react-hot-toast';
import api from '../Libs/axios';

const NoteCard = ({note,setNudes}) => {
    const handleDelete = async(e,id,tit)=>{
        e.preventDefault();
        if(!window.confirm("Do you wanna delete the note"))return;
        
        try {
            await api.delete(`/notes/${id}`);
            setNudes((prev => prev.filter( note => note._id !== id))) // this will update notes usestate of homepage
            toast.success(`Note ${tit} deleted successfully.`);
        } catch (error) {
            console.log("Error in handleDelete \n",error);
            toast.error("Failed to deleted note!!");
        }

    }
    return (
        <Link to={`/note/${note._id}`} className='card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]'>
            <div className='card-body'>
                <h3 className='card-title text-base-content'>{note.title}</h3>
                <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
                <div className='card-actions justify-between items-center mt-4'>
                    <span className='text-base-content/60 text-sm'>
                    {formateDate(new Date(note.createdAt))}
                    </span>
                    <div className='flex items-center gap-1'>
                        <PenSquareIcon className='size-4' />
                        <button className='btn btn-ghost btn-xs text-error' onClick={(e)=>handleDelete(e,note._id,note.title)}>
                            <Trash2Icon className="size-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default NoteCard