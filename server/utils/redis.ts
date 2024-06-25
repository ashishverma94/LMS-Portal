require("dotenv").config();
import { Redis } from "ioredis";

// const redisClient = () => {
//   if (process.env.REDIS_URL) {
//     console.log("Redis Connected !");
//     return process.env.REDIS_URL;
//   }
//   throw new Error ( "Redis connection failed !")
// };

// export const redis = new Redis(redisClient()) ;

const redisClient = () => {
  const host = process.env.REDIS_HOST;
  const port = process.env.REDIS_PORT;
  const password = process.env.REDIS_PASSWORD;

  if (host && port && password) {
    console.log("Redis Connected !");
    return new Redis({
      host: host,
      port: parseInt(port, 10),
      password: password,
      tls: {}  
    });
  }

  throw new Error("Redis connection failed! Missing environment variables.");
};

export const redis = redisClient();

