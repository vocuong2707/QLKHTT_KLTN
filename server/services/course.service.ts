import { Response , NextFunction , Request } from "express";
import CourseModel from "../models/source.model";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import mongoose from "mongoose";
import { redis } from "../utils/redis";
// create course 
export const createCourse = CatchAsyncError(async(data:any , res:Response , next:NextFunction)=> {
    const course = await CourseModel.create(data);
    console.log('====================================');
    const courses = JSON.parse(await redis.get('allCourses')) || [];
try {
    await redis.rpush('allCourses', JSON.stringify({
        ...course,
        _id: course._id || new mongoose.Types.ObjectId().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
    }));} 
    catch (error) {
    console.error("Redis Error:", error);
    // Có thể thông báo admin hoặc ghi log tại đây
}

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