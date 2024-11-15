require("dotenv").config();
import { Request,Response,NextFunction } from "express";
import ejs from "ejs"
import userModel, { IUser } from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import jwt, { Secret } from "jsonwebtoken";
import path from "path";
import sendMail from "../utils/sendMail";
import { redis } from "../utils/redis";
import {sendToken} from '../utils/jwt';
// register user
interface IRegistrationBody {
    name:string,
    email:string,
    password:string,
    avatar?:string,

}
export const registrationUser = CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=> {
    try {
        const {name,email,password,avatar} = req.body;
        const isEmailExits = await userModel.findOne({email});
        if(isEmailExits) {
            return next(new ErrorHandler("Email already exist",400));
        };
        const user:IRegistrationBody = {
            name,
            email,
            password,
        };
        const activationToken = createActivationToken(user);
        const activationCode = activationToken.activationCode;
        const data  = {user:{name:user.name},activationCode};
        const html = await ejs.renderFile(path.join(__dirname,"../mails/activation-mail.ejs"),data);
        try {
            await sendMail({
                email:user.email,
                subject:"Active your account",
                template:"activation-mail.ejs",
                data
            });
            res.status(200).json({
                success:true,
                message:`Please check your email:${user.email} to active your account!`,
                activationToken:activationToken.token,
            });
        } catch (error:any) {
            return next(new ErrorHandler(error.message,400));
        }
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400));
    }
});

interface IActivationToken {
    token:string,
    activationCode:string;
}

export const createActivationToken = (user : any): IActivationToken => {
    const activationCode = Math.floor(1000 + Math.random()*9000).toString();
    const token = jwt.sign({
        user,activationCode
    },process.env.ACTIVATION_SECRET as Secret, {
        expiresIn:"5m",
    });
    return {token,activationCode}
}

// activate user

interface IActivationRequest {
    activation_token : string,
    activation_code : string,
}

export const activateUser = CatchAsyncError(async(req:Request , res:Response, next:NextFunction) => {
    try {
        const {activation_token,activation_code} = req.body as IActivationRequest;
        const newUser: {user:IUser,activationCode:string}= jwt.verify(
            activation_token,
            process.env.ACTIVATION_SECRET as string
        )as {user:IUser;activationCode:string};
        if(newUser.activationCode !== activation_code) {
            return next(new ErrorHandler("Invalid activation code",400));
        }

        const {name,email,password} = newUser.user;
        const existUser = await userModel.findOne({email});
        if(existUser) {
            return next(new ErrorHandler("Email aready exist",400));
        }
        const user = await userModel.create({
            name,
            email,
            password
        });
        res.status(200).json({
            success:true,
            message:"Register success"
        })
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400))
    }
})

// Login user
interface IloginRequest {
    email:string,
    password:string
}

export const loginUser = CatchAsyncError(async(req:Request , res:Response,next:NextFunction)=> {
    try {
        const {email,password} = req.body as IloginRequest;
        if(!email || !password) {
            return next(new ErrorHandler("Please enter email and password",400));
        }
        const user = await userModel.findOne({email}).select("+password");
        if(!user) {
            return next(new ErrorHandler("Invalid email or password",400));
        }

        const isPasswordMath = await user.comparePassword(password);
        if(!isPasswordMath) {
            return next(new ErrorHandler("Invalid email or password",400));
        }
        sendToken(user,200,res);
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400))
    }
}) 

// logout

export const logoutUser = CatchAsyncError(async(req:Request , res:Response , next:NextFunction) => {
    try {
        res.cookie("access_token","",{maxAge:1})
        res.cookie("refresh_token","",{maxAge:1})
        res.status(200).json({
            success:true,
            message:"Logged out successfully"
        });

    } catch (error:any) {
        return next(new ErrorHandler(error.message,400))
    }
})