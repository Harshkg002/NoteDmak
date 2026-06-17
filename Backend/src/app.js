import express from"express"
import noteRouter from "./Routes/noteRouter.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
import rateLimiter from "./Middleware/rateLimiter.js";

dotenv.config();
const app= express();


//middleware these are usually for authentication check / rate limiting
app.use(express.json())//this parse the incoming json files and gives us req.body to access all elements.
app.use(rateLimiter);
app.use((req,res,next)=>{
    console.log(`Request is send ${req.method} and url is ${req.url}`); 
    next();
});


app.use("/notes",noteRouter);//this tell the express to forward all request leading from /notes to noteRouter
//name noteRouter is the same as router in noteRouter.js file

async function startServer() {
    try {
        await connectDB();

        app.listen(5001, () => {
            console.log("Server started on Port: 5001");
        });
    } catch (error) {
        console.error("Failed to start server", error);
        process.exit(1);
    }
}

startServer();

//mongodb+srv://harshkgupta002_db_user:ItU8lnHRBD2U8DqV@cluster0.xbjeek3.mongodb.net/?appName=Cluster0