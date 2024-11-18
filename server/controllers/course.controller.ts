import { NextFunction , Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler";
import cloudinary from "cloudinary"
import { createCourse } from "../services/course.service";
import { url } from "inspector";
import CourseModel from "../models/source.model";


export const uploadCourse = CatchAsyncError(async(req:Request , res:Response,next:NextFunction)=> {
    try {
        const data = req.body;
        const thumbnail = data.thumbnail;
        if(thumbnail) {
            const myCloud = await cloudinary.v2.uploader.upload(thumbnail,{
                folder:"courses"
            });
            data.thumbnail= {
                public_id : myCloud.public_id,
                url : myCloud.secure_url
            }
        }

        createCourse(data,res,next);
    } catch (error : any) {
        return next(new ErrorHandler(error.message,500));
    }
})

//edit
export const editCourse = CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=> {
    try {
        const data = req.body;
        const thumbnail = data.thumbnail;
        if(thumbnail) {
            await cloudinary.v2.uploader.destroy(thumbnail.public_id);
            const myCloud = await cloudinary.v2.uploader.upload(thumbnail,{
                folder:"courses",
            });

            data.thumbnail = {
                public_id : myCloud.public_id,
                url: myCloud.secure_url
            };
        }

        const courseId = req.params.id;
        const course = await CourseModel.findByIdAndUpdate(courseId,{
            $set: data},
            {new : true}
        );
        console.log('====================================');
        console.log("course: " , course);
        console.log('====================================');
        res.status(200).json({
            success:true,
            course
        })
    } catch (error : any) {
        return next(new ErrorHandler(error.message,500));

    }
})