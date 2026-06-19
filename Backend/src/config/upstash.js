import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"
import dotenv from "dotenv";
dotenv.config();

const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10,"20 s"),
});

export default rateLimit;


//this just creates a rateLimiting redis configured object that incteracts with redis