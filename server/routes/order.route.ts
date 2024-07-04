import express from "express";
import { createOrder, getAllOrders } from "../controllers/order.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated as any, createOrder as any);
orderRouter.get(
  "/get-orders",
  isAuthenticated as any,
  authorizeRoles("admin") as any,
  getAllOrders as any
);

export default orderRouter;
