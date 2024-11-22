import express from "express";
import { editCourse, uploadCourse,getSingleCourse, getAllCourse, getCourseByUser } from "../controllers/course.controller";
import { authorizaRoles, isAutheticated } from "../middleware/auth";

const courseRoute = express.Router();
courseRoute.post("/create-course",isAutheticated,authorizaRoles("admin"),uploadCourse);
courseRoute.post("/edit-course/:id",isAutheticated,authorizaRoles("admin"),editCourse);
courseRoute.get("/get-course/:id",getSingleCourse);
courseRoute.get("/get-courses",getAllCourse);
courseRoute.get("/get-course-content/:id",isAutheticated    ,getCourseByUser);


export default courseRoute;