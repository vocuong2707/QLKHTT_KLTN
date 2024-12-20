import express from "express";
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { getAllNotification, updateNotification } from "../controllers/notification.controller";

const notificationRouter = express.Router();

notificationRouter.get("/get-all-notifications",isAutheticated,authorizaRoles("admin"),getAllNotification);
notificationRouter.put("/update-notification/:id",isAutheticated,authorizaRoles("admin"),updateNotification);


export default notificationRouter;