import {
  addAnswer,
  addReview,
  editCourse,
  addQuestion,
  uploadCourse,
  getAllCourses,
  getSingleCourse,
  getCourseByUser,
  addReplyToReview,
} from "../controllers/course.controller";
import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";

const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated as any,
  authorizeRoles("admin"),
  uploadCourse as any
);
courseRouter.put(
  "/edit-course/:id",
  isAuthenticated as any,
  authorizeRoles("admin"),
  editCourse as any
);
courseRouter.get(
  "/get-course-content/:id",
  isAuthenticated as any,
  getCourseByUser as any
);
courseRouter.get("/get-courses", getAllCourses as any);
courseRouter.get("/get-course/:id", getSingleCourse as any);
courseRouter.put("/add-question", isAuthenticated as any, addQuestion as any);
courseRouter.put("/add-answer", isAuthenticated as any, addAnswer as any);
courseRouter.put("/add-review/:id", isAuthenticated as any, addReview as any);
courseRouter.put(
  "/add-reply",
  isAuthenticated as any,
  authorizeRoles("admin"),
  addReplyToReview as any
);

export default courseRouter;
