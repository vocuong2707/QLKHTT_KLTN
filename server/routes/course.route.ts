import express from "express";
<<<<<<< HEAD
import { editCourse, uploadCourse,getSingleCourse, getAllCourse, getCourseByUser, addQuestion, addAnswer, addReview, addReplyToReview, getAllCourses, deleteCourse, getAdminAllCourses, generateVideoUrl } from "../controllers/course.controller";
=======
import { editCourse, uploadCourse,getSingleCourse, getAllCourse, getCourseByUser, addQuestion, addAnswer, addReview, addReplyToReview, deleteCourse, getAdminAllCourses, generateVideoUrl } from "../controllers/course.controller";
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
import { authorizaRoles, isAutheticated } from "../middleware/auth";
import { updateAccessToken } from "../controllers/user.controller";

const courseRouter = express.Router();
<<<<<<< HEAD
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
=======
courseRouter.post("/create-course",updateAccessToken,isAutheticated,authorizaRoles("admin"),uploadCourse);
courseRouter.post("/edit-course/:id",updateAccessToken,isAutheticated,authorizaRoles("admin"),editCourse);
courseRouter.get("/get-course/:id",getSingleCourse);
courseRouter.get("/get-courses",getAllCourse);
courseRouter.get("/get-course-content/:id",updateAccessToken,isAutheticated    ,getCourseByUser);
courseRouter.put("/add-question",updateAccessToken,isAutheticated    ,addQuestion);
courseRouter.put("/add-answer",updateAccessToken,isAutheticated    ,addAnswer);
courseRouter.put("/add-review/:id",updateAccessToken,isAutheticated    ,addReview);
courseRouter.put("/add-reply",updateAccessToken,isAutheticated  ,authorizaRoles("admin")  ,addReplyToReview);
courseRouter.get("/get-admin-courses",isAutheticated  ,authorizaRoles("admin")  ,getAdminAllCourses);
courseRouter.post("/getVdoCipherOTP"  ,generateVideoUrl);

courseRouter.put("/delete-course/:id",updateAccessToken,isAutheticated  ,authorizaRoles("admin")  ,deleteCourse);
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d


export default courseRouter;