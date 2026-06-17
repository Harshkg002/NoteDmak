import rateLimit from "../config/upstash.js"

const rateLimiter = async(req,res,next)=>{
    try {
        const{success} = await rateLimit.limit("my-limit-key")
        //ask the redis db that is current reqs exceeds the limit return false if it does
        if (!success) {
            return res.status(429).json({message:"Too many requests, please try again later."})
        }// if the limit is exceeded the req doesn't reach the route this itself returns!!
        next();
    } catch (error) {
        console.log("Rate limit error",error);
        next(error);
    }
};
export default rateLimiter;

//this is where actual ratelimiting occurs