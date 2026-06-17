import mongoose from "mongoose";

//1- create a schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
},{
    timestamps:true  //this will be provided by mongoose (createdAt, updatedAt fields)
});

//model or table based on the schema
const Note = mongoose.model("Note",noteSchema);
// Note points to table named Note in mongodb database which is using the noteSchema format
export default Note //export the variable named note for others to use