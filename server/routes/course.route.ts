import express from "express";
import { editCourse, uploadCourse,getSingleCourse, getAllCourse, getCourseByUser, addQuestion, addAnswer, addReview, addReplyToReview, getAllCourses, deleteCourse, getAdminAllCourses, generateVideoUrl } from "../controllers/course.controller";
import { authorizaRoles, isAutheticated } from "../middleware/auth";

const courseRouter = express.Router();
courseRouter.post("/create-course",isAutheticated,authorizaRoles("admin"),uploadCourse);
courseRouter.post("/edit-course/:id",isAutheticated,authorizaRoles("admin"),editCourse);
courseRouter.get("/get-course/:id",getSingleCourse);
courseRouter.get("/get-courses",getAllCourse);
courseRouter.get("/get-course-content/:id",isAutheticated    ,getCourseByUser);
courseRouter.put("/add-question",isAutheticated    ,addQuestion);
courseRouter.put("/add-answer",isAutheticated    ,addAnswer);
courseRouter.put("/add-review/:id",isAutheticated    ,addReview);
courseRouter.put("/add-reply",isAutheticated  ,authorizaRoles("admin")  ,addReplyToReview);
courseRouter.get("/get-admin-courses",isAutheticated  ,authorizaRoles("admin")  ,getAdminAllCourses);
courseRouter.post("/getVdoCipherOTP"  ,generateVideoUrl);

courseRouter.put("/delete-course/:id",isAutheticated  ,authorizaRoles("admin")  ,deleteCourse);


export default courseRouter;