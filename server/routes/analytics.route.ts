import {
  getUserAnalytics,
  getOrderAnalytics,
  getCoursesAnalytics,
} from "../controllers/analytics.controller";
import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";

const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-users-analytics",
  isAuthenticated as any,
  authorizeRoles("admin"),
  getUserAnalytics as any
);
analyticsRouter.get(
  "/get-orders-analytics",
  isAuthenticated as any,
  authorizeRoles("admin"),
  getOrderAnalytics as any
);
analyticsRouter.get(
  "/get-courses-analytics",
  isAuthenticated as any,
  authorizeRoles("admin"),
  getCoursesAnalytics as any
);

export default analyticsRouter;
