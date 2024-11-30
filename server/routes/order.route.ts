import express from "express";
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { createOrder, getAllOrder } from "../controllers/order.controller";
<<<<<<< HEAD
const orderRouter = express.Router();

orderRouter.post("/create-order",isAutheticated,createOrder);
orderRouter.get("/get-orders",isAutheticated,authorizaRoles("admin"),getAllOrder);
=======
import { updateAccessToken } from "../controllers/user.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order",isAutheticated,createOrder);
orderRouter.get("/get-orders",updateAccessToken,isAutheticated,authorizaRoles("admin"),getAllOrder);
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d

export default orderRouter;