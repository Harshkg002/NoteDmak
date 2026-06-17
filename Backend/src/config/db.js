import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("Database connected Succesfull!!");
    } catch (error) {
        console.error("Error connecting to the database.\n",error);
        process.exit(1);
    }
}




