import express from "express"
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";
<<<<<<< HEAD

const layoutRouter = express.Router();
layoutRouter.post("/create-layout",isAutheticated,authorizaRoles("admin"),createLayout);
layoutRouter.post("/edit-layout",isAutheticated,authorizaRoles("admin"),editLayout);
layoutRouter.get("/get-layout",getLayoutByType);
=======
import { updateAccessToken } from "../controllers/user.controller";

const layoutRouter = express.Router();
layoutRouter.post("/create-layout",updateAccessToken,isAutheticated,authorizaRoles("admin"),createLayout);
layoutRouter.post("/edit-layout",updateAccessToken,isAutheticated,authorizaRoles("admin"),editLayout);
layoutRouter.get("/get-layout/:type",getLayoutByType);
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d

export default layoutRouter