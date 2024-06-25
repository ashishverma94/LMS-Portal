import {
  loginUser,
  socialAuth,
  logoutUser,
  getUserInfo,
  activateUser,
  registrationUser,
  updateAccessToken,
} from "../controllers/user.controller";
import express from "express";
import { isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/login", loginUser as any);
userRouter.post("/social-auth", socialAuth as any);
userRouter.get("/refresh", updateAccessToken as any);
userRouter.post("/activate-user", activateUser as any);
userRouter.post("/registration", registrationUser as any);
userRouter.get("/me", isAuthenticated as any, getUserInfo as any);
userRouter.get("/logout", isAuthenticated as any, logoutUser as any);
export default userRouter;
