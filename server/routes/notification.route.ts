import express from "express";
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { getAllNotification, updateNotification } from "../controllers/notification.controller";
<<<<<<< HEAD

const notificationRouter = express.Router();

notificationRouter.get("/get-all-notifications",isAutheticated,authorizaRoles("admin"),getAllNotification);
=======
import { updateAccessToken } from "../controllers/user.controller";

const notificationRouter = express.Router();

notificationRouter.get("/get-all-notifications",updateAccessToken,isAutheticated,authorizaRoles("admin"),getAllNotification);
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
notificationRouter.put("/update-notification/:id",isAutheticated,authorizaRoles("admin"),updateNotification);


export default notificationRouter;