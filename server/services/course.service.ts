import { Response , NextFunction , Request } from "express";
import CourseModel from "../models/source.model";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
// create course 
export const createCourse = CatchAsyncError(async(data:any , res:Response , next:NextFunction)=> {
    const course = await CourseModel.create(data);
    res.status(200).json({
        success:true,
        course
    })
})

// Get All users --- only admin
export const getAllCoursesService = async(res:Response)=>{
    const courses = await CourseModel.find().sort({createAt:-1});
    res.status(201).json({
        success:true,
        courses
    })
};