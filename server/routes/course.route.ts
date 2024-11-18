import express from "express";
import { editCourse, uploadCourse } from "../controllers/course.controller";
import { authorizaRoles, isAutheticated } from "../middleware/auth";

const courseRoute = express.Router();
courseRoute.post("/create-course",isAutheticated,authorizaRoles("admin"),uploadCourse);
courseRoute.post("/edit-course/:id",isAutheticated,authorizaRoles("admin"),editCourse);


export default courseRoute;