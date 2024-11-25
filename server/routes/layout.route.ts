import express from "express"
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { createLayout, editLayout, getLayoutByType } from "../controllers/layout.controller";

const layoutRouter = express.Router();
layoutRouter.post("/create-layout",isAutheticated,authorizaRoles("admin"),createLayout);
layoutRouter.post("/edit-layout",isAutheticated,authorizaRoles("admin"),editLayout);
layoutRouter.get("/get-layout",getLayoutByType);

export default layoutRouter