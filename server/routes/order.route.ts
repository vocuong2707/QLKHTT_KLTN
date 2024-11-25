import express from "express";
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { createOrder, getAllOrder } from "../controllers/order.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order",isAutheticated,createOrder);
orderRouter.get("/get-orders",isAutheticated,authorizaRoles("admin"),getAllOrder);

export default orderRouter;