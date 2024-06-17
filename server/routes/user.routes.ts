import express from "express";
import { activationUser, loginUser, logoutUser, registrationUser, updateAccessToken } from "../controllers/user.controller";
import { authorizRoles, isAuthenticated } from "../middleware/auth";

const userRouter = express.Router()

userRouter.post('/registration', registrationUser)
userRouter.post('/activate-user', activationUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout',isAuthenticated, logoutUser)
userRouter.get("/refresh", updateAccessToken)

export default userRouter