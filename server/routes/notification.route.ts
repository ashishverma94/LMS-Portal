import {
  getNotifications,
  updateNotification,
} from "../controllers/notification.controller";
import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const notificationRouter = express.Router();

notificationRouter.get(
  "/get-all-notifications",
  isAuthenticated as any,
  authorizeRoles("admin") as any,
  getNotifications as any
);

notificationRouter.put(
  "/update-notification/:id",
  isAuthenticated as any,
  authorizeRoles("admin") as any,
  updateNotification as any
);

export default notificationRouter;
