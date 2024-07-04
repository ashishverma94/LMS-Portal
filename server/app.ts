import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import express, { NextFunction, Request, Response } from "express";
require("dotenv").config();

// APP
export const app = express();

// BODY PARSER
app.use(express.json({ limit: "50mb" }));
// COOKIE PARSER
app.use(cookieParser());
// CORS [CROSS ORIGIN RESOURCE SHARING]
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// ROUTES
import userRouter from "./routes/user.route";
import orderRouter from "./routes/order.route";
import courseRouter from "./routes/course.route";
import notificationRouter from "./routes/notification.route";

app.use("/api/v1", userRouter, orderRouter, courseRouter, notificationRouter);

// TESTING API
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, message: "API is working" });
});

// UNKNOWN ROUTE
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found!`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
