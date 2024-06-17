import express from "express";
import { activationUser, getUserInof, loginUser, logoutUser, registrationUser, socialAuth, updateAccessToken, updatePassword, updateProfilePicture, updateUserInfo } from "../controllers/user.controller";
import { authorizRoles, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router()

userRouter.post('/registration', registrationUser)
userRouter.post('/activate-user', activationUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout',isAuthenticated, logoutUser)
userRouter.get("/refresh", updateAccessToken)
userRouter.get("/me", isAuthenticated, getUserInof)
userRouter.get("/social-auth", socialAuth)
userRouter.put("/update-user-info", isAuthenticated,updateUserInfo)
userRouter.put("/update-user-password", isAuthenticated,updatePassword)
userRouter.put("/update-user-avatar", isAuthenticated,updateProfilePicture)

export default userRouter