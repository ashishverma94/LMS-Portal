import express from "express";
import { isAuthenticated, authorizeRoles } from "../middleware/auth";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAuthenticated as any,
  authorizeRoles("admin"),
  createLayout as any
);

layoutRouter.put(
  "/edit-layout",
  isAuthenticated as any,
  authorizeRoles("admin"),
  editLayout as any
);

layoutRouter.get("/get-layout", getLayoutByType as any);

export default layoutRouter;
