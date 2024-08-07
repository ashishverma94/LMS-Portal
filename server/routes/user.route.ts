import {
  loginUser,
  socialAuth,
  logoutUser,
  getUserInfo,
  getAllUsers,
  activateUser,
  updatePassword,
  updateUserInfo,
  updateUserRole,
  registrationUser,
  updateAccessToken,
  updateProfilePicture,
} from "../controllers/user.controller";
import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/login", loginUser as any);
userRouter.post("/social-auth", socialAuth as any);
userRouter.get("/refresh", updateAccessToken as any);
userRouter.post("/activate-user", activateUser as any);
userRouter.post("/registration", registrationUser as any);
userRouter.get("/me", isAuthenticated as any, getUserInfo as any);
userRouter.get("/logout", isAuthenticated as any, logoutUser as any);
userRouter.put(
  "/update-user-info",
  isAuthenticated as any,
  updateUserInfo as any
);
userRouter.put(
  "/update-user-password",
  isAuthenticated as any,
  updatePassword as any
);
userRouter.put(
  "/update-user-avatar",
  isAuthenticated as any,
  updateProfilePicture as any
);
userRouter.get(
  "/get-users",
  isAuthenticated as any,
  authorizeRoles("admin"),
  getAllUsers as any
);
userRouter.put(
  "/update-user",
  isAuthenticated as any,
  authorizeRoles("admin"),
  updateUserRole as any
);

export default userRouter;
