import Note from "../Models/Note.js";

export async function getNotes(req,res){
    try {
        const notes = await Note.find();//fetch all notes
        res.status(200).json(notes)//send them
    } catch (error) {
        console.error("Error in getNotes Controller \n",error);
        res.status(500).json({message :"Internal  server error"});
    }
}

export async function createNote(req,res){
    try {
        const{title,content} = req.body
        const newNote = new Note({title,content})  //create the content for a row  
        const saved = await newNote.save();//creates the row
        res.status(201).json(saved);

    } catch (error) {
        console.error("Error in createNotes Controller \n",error);
        res.status(500).json({message :"Internal  server error"});
    }
}

export async function updateNote(req,res){
    try {
        const{title,content} = req.body;
        const save = await Note.findByIdAndUpdate( req.params.id,{ title, content },{ new: true });
        if(!save) return res.status(404).send("Message not found.");
        res.status(200).json(save);
    } catch (error) {
        console.error("Error in updateNote Controller \n",error);
        res.status(500).json({message :"Internal  server error"});
    }
}

export async function getNotebyId(req,res) {
    try {
        const found = await Note.findById(req.params.id);
        if(!found) return res.status(404).send("Message not found.");
        res.status(200).json({message:"Found the Note",note:found})
    } catch (error) {
        console.error("Error in getNotebyId Controller \n",error);
        res.status(500).json({message :"Internal  server error",error:error});
    }
}

export async function deleteNote(req,res){
    try {
        const del = await Note.findByIdAndDelete(req.params.id);
        if(!del) return res.status(404).send("Note not found.");
        res.status(200).json({message:"succesfully deleted.",deleteNote:del})
    } catch (error) {
        console.error("Error in deleteNote Controller \n",error);
        res.status(500).json({message :"Internal  server error"});
    }
}