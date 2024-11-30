import express from 'express'
import { registrationUser ,activateUser, loginUser, logoutUser, updateAccessToken, getUserInfo, socialAuth, updateUserInfo, updatePassword, updateProfilePicture, getAllUsers, updateUserRole, deleteUser} from '../controllers/user.controller'
import { authorizaRoles, isAutheticated } from '../middleware/auth';
const userRouter = express.Router();
userRouter.post('/registration',registrationUser);
userRouter.post('/activate-user',activateUser);
userRouter.post('/login',loginUser);
userRouter.get('/logout',isAutheticated,logoutUser)
userRouter.get("/refresh",updateAccessToken)
userRouter.get("/me",updateAccessToken,isAutheticated,getUserInfo)
userRouter.post("/social-auth",socialAuth)
<<<<<<< HEAD
userRouter.put("/update-user-info",isAutheticated,updateUserInfo)
userRouter.put("/update-user-password",isAutheticated,updatePassword)
userRouter.put("/update-user-avatar",isAutheticated,updateProfilePicture)
userRouter.get("/get-users",isAutheticated,authorizaRoles("admin"),getAllUsers);
userRouter.put("/update-user-role",isAutheticated,authorizaRoles("admin"),updateUserRole);
userRouter.put("/delete-user/:id",isAutheticated,authorizaRoles("admin"),deleteUser);
=======
userRouter.put("/update-user-info",updateAccessToken,isAutheticated,updateUserInfo)
userRouter.put("/update-user-password",updateAccessToken,isAutheticated,updatePassword)
userRouter.put("/update-user-avatar",updateAccessToken,isAutheticated,updateProfilePicture)
userRouter.get("/get-users",updateAccessToken,isAutheticated,authorizaRoles("admin"),getAllUsers);
userRouter.put("/update-user-role",updateAccessToken,isAutheticated,authorizaRoles("admin"),updateUserRole);
userRouter.put("/delete-user/:id",updateAccessToken,isAutheticated,authorizaRoles("admin"),deleteUser);
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d

export default userRouter;